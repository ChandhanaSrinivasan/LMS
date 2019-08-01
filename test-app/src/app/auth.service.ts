import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  password: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 private urlUsers = 'api/users';
  
 
  

  constructor(private http: HttpClient) { }
login(username,password)
{
  console.log(  this.http.post(`${this.urlUsers + 'users'}`, username));
  if((username==this.urlUsers+'users[0].username')&&(password==this.urlUsers+'users[0].password'))
  {
    alert("DF");
  }
}




  /*
  login(username,password)
  {
    console.log(username,password);
    console.log(`${this.urlUsers}`);
  // console.log( this.http.post<any>('/api/auth', { username: username, password: password }));
   return this.http.post<User>( `${this.urlUsers}/login`, username,password).pipe(
    tap(user => {
      console.log(user);
    }));
  }*/

 /*login(username,password): Observable<User> {
    const url = `${this.urlUsers}/${username}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user=${username}`)),
      catchError(this.handleError<User>(`login username=${username}`))
    );
  } */


  /*login(username,password): Observable<User> {
    const url = `${this.urlUsers}/${username}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched hero id=${this.username}`)),
      catchError(this.handleError<User>(`login username=${this.username}`))
    );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
}