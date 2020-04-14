import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  get(path): Observable<any> {
    return this.http.get(path);
  }

  post(path, object): Observable<any> {
    return this.http.post(path, object).pipe(take(1));
  }

  update(path, object): Observable<any> {
    return this.http.put(path, object).pipe(take(1));
  }
}
