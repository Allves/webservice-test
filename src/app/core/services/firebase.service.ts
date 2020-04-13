import { AngularFirestore } from '@angular/fire/firestore';
import { ISignalR } from './../signalr/signalr.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getHubs() {
    return this.db.collection<ISignalR>('hubs').valueChanges();
  }

  getHub(hubKey) {
    return this.db.collection('hubs').doc(hubKey).snapshotChanges();
  }

  updateHub(hubKey, value: ISignalR) {
    return this.db.collection('hubs').doc(hubKey).set(value);
  }

  deleteHub(hubKey) {
    return this.db.collection('hubs').doc(hubKey).delete();
  }

  searchHubs(searchValue = 'teste') {
    return this.db.collection('hubs ', ref =>
    ref.startAt(searchValue.toLowerCase()).endAt(searchValue.toLowerCase() + "\uf8ff"))
  }

  getActives() {
    return this.db.collection('hubs', ref => ref.where('active', '==', true)).valueChanges();
  }

  createHub(value: ISignalR){
    return this.db.collection('hubs').add({
      name: value.name,
      description: value.description,
      url: value.url,
      active: true
    });
  }
}
