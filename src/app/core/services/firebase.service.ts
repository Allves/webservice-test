import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as faker from 'faker';
import { IHub } from './../signalr/hub.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getHubs() {
    return this.db.collection('hubs').snapshotChanges().pipe(
      map(hubs => hubs.map(a => {
        const data = a.payload.doc.data() as IHub;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getHub(hubKey) {
    return this.db.collection('hubs').doc(hubKey).snapshotChanges();
  }

  updateHub(hubKey, value: IHub) {
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

  createHub(value: IHub) {
    return this.db.collection('hubs').add({
      name: value.name,
      description: value.description,
      url: value.url,
      active: true,
    });
  }
}
