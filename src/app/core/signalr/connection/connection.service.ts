import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';

@Injectable()
export class ConnectionService {
  response = new EventEmitter<any>();
  connectionEstablished = new EventEmitter<boolean>();


  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;
  private connection: string;

  constructor() {
  }

  public startProcess() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.connection, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .build();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log(`Conectado ao hub ${this.connection}`);
        this.connectionEstablished.emit(true);
      })
      .catch(err => {
        console.log(`Erro ao tentar conectar em ${this.connection}, tentando novamente em 10 segundos`)
        setTimeout(function() { this.startConnection(); }, 10000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on('hub', (data: any) => {
      this.response.emit(data);
    });
  }
};
