import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from '@aspnet/signalr';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  response = new EventEmitter<any>();
  connectionEstablished = new EventEmitter<boolean>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor() {}

  public createConnection(connectionString: string) {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(connectionString, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    this._hubConnection
      .start()
      .then(() => {
        this.connectionEstablished.emit();
        console.log(`Conectado ao hub ${connectionString}`);

      })
      .catch((err) => {
        console.log(`Erro ao tentar conectar em ${connectionString}`);
      });
  }

  public stopConnection(connectionString: string) {
    this._hubConnection.stop()
    .then(() => {

      console.log(`Desconetado do hub ${connectionString}`);
    })
    .catch((err) => {
      console.log(`Erro ao desconectar de ${connectionString}`);
    });;
  }

  public registerOnServerEvents(serverEvent: string): void {
    this._hubConnection.on(serverEvent, (data: any) => {
      console.log(data);
    });
  }

  public unRegisterOnServerEvents(serverEvent: string): void {
    this._hubConnection.off(serverEvent, (data: any) => {

    });
  }

  public startStreaming(channelName: string ) {
    return this._hubConnection.stream(channelName).subscribe({
      next: data => {
        console.log('data');
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
