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
        this.startStreaming('StreamStocks');
      })
      .catch((err) => {
        console.log(`Erro ao tentar conectar em ${connectionString}`);
      });
  }

  public stopConnection() {
    this._hubConnection.stop();
  }

  public registerOnServerEvents(): void {
    this._hubConnection.on('marketOpened', (data: any) => {
      console.log(data);
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
