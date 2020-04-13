import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ISignalR } from "./signalr.model";

@Injectable()
export class SignalRService {
  private signalRObservable: BehaviorSubject<ISignalR> = new BehaviorSubject({
    url: "http://localhost:91/hub",
  });

  public getSignalRConfiguration(): Observable<ISignalR> {
    return this.signalRObservable.asObservable();
  }

  public setSignalRConfiguration(configuration: ISignalR) {
    this.signalRObservable.next(configuration);
  }

  constructor() {}
}
