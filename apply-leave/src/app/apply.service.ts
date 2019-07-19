import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  url = 'api/users';
  constructor(private http: HttpClient) { }
  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  applyPost(): Observable<User[]> {
    return this.http.post<any>(this.url, this.getData);
  }

}
