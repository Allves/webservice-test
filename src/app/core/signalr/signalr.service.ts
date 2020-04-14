 import { Injectable } from '@angular/core';
 import { BehaviorSubject, Observable } from 'rxjs';
 import { IHub } from './hub.model';

 @Injectable()
export class SignalRService {
  // private signalRObservable: BehaviorSubject<IHub> = new BehaviorSubject({

  // });

  public getSignalRConfiguration() {
    // return this.signalRObservable.asObservable();
  }

  public setSignalRConfiguration(configuration: IHub) {
    // this.signalRObservable.next(configuration);
  }

  constructor() {}
}
