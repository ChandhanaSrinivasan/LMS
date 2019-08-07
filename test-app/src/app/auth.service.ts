import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';
import { InMemoryDataService } from './in-memory-data.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlUsers = 'api/users';
  constructor(private http: HttpClient, private mem: InMemoryDataService) { }

  login(username: string,password: string): Observable<User> {
  console.log(username, password);
  console.log(this.mem.createDb);
  const url = `${this.urlUsers}/${username}`;
  return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user username=${username}`)),
      catchError(this.handleError<User>(`login username=${username}`))
    );

}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
post(reqInfo: RequestInfo) {
        
  
  if (reqInfo.collectionName === 'authentication')
      return this.authenticate(reqInfo)
  
  
  return undefined
}


 authenticate(reqInfo: RequestInfo) {

  
  return reqInfo.utils.createResponse$(() => {
      console.log('HTTP POST api/authentication override')

      const { headers, url, req } = reqInfo

      const { username, password } = req['body']
      if (username === 'fred92' && password === '1234')
          return { 
            status: 200, 
            headers, // reqInfo (line 30)
            url, // reqInfo (line 30)
            body: { 
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            } 
          }

     
      return { 
        status: 401, 
        headers, 
        url, 
        body: { } 
      }
  })
}
}
