import { FirebaseService } from './core/services/firebase.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IHub } from './core/signalr/hub.model';
import { ConnectionService } from './core/signalr/connection/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PraxioWebServiceUI';
  hubs$: Observable<IHub[]>;

  constructor(private firebaseService: FirebaseService, private connectionService: ConnectionService) {

  }



}
