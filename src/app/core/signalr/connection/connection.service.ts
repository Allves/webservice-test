import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from '@aspnet/signalr';
import { EventEmitter, Injectable } from '@angular/core';
import { IHub } from '../hub.model';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  response = new EventEmitter<any>();
  connectionEstablished = new EventEmitter<boolean>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor() {}

  public createConnection(hub: IHub) {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(hub.url, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    this._hubConnection
      .start()
      .then(() => {
        this.connectionEstablished.emit();
        console.log(`Conectado ao hub ${hub.name}`);

        for (const stream of hub.streams) {

          this.startStreaming(stream.name);
        }

        for (const method of hub.methods) {
          this.registerOnServerMethods(method.name);
        }


      })
      .catch((err) => {
        console.log(`Erro ao tentar conectar em ${hub.name}`);
      });
  }

  public stopConnection(hub: IHub) {
    this._hubConnection.stop()
    .then(() => {

      console.log(`Desconetado do hub ${hub.name}`);
    })
    .catch((err) => {
      console.log(`Erro ao desconectar de ${hub.name}`);
    });;
  }

  public registerOnServerMethods(serverEvent: string): void {
    this._hubConnection.on(serverEvent, (data: any) => {
      console.log(serverEvent);
      console.log(data);
    });
  }

  public unRegisterOnServerMethods(serverEvent: string): void {
    this._hubConnection.off(serverEvent, (data: any) => {

    });
  }

  public startStreaming(methodName: string ) {
    return this._hubConnection.stream(methodName).subscribe({
      next: data => {
        console.log('Stream data');
        console.log(data);
      },
      complete: () => {
        console.log('complete');
      },
      error: error => {
        console.log('error');
        console.log(error);
      }
    });
  }


}
