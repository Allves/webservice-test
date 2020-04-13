import { FirebaseService } from './core/services/firebase.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignalR } from './core/signalr/signalr.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PraxioWebServiceUI';
  hubs$: Observable<ISignalR[]>;

  constructor(private firebaseService: FirebaseService) {
     this.firebaseService.getActives().subscribe(response => console.log(response));
  }

}
