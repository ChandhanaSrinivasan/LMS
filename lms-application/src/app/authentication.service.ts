import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';
import { LeaveRequest } from './leaveRequest';
import { LeaveDetails } from './leaveDetails';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 private urlUsers = 'api/users';
 private  urlLeaveDetail = 'api/leaveDetails';
  private urlRequest = 'api/requestLeave';  // URL to web api
  username: any;
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  constructor(private http: HttpClient, private router: Router) { }

/* 
  login(username : string) {
    /*return this.http.post<User>( `${this.urlUsers}/login`, formData).pipe(
      tap(user => {

        console.log(`${this.urlUsers}/${this.username}`);

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.handleError('login', []))
    );*/
    /*const url = `${this.urlUsers}/${this.username}`;
    return this.http.get<User>(url).pipe(
    tap(_ => console.log(`fetched hero username=${this.username}`)),
    catchError(this.handleError<User>(`getHero username=${this.username}`))
  );
 return console.log(`api/users/?name=${this.username}`)
  } */
  
  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 
  apply(formData: NgForm)  {
    return this.http.post<User>( `${this.urlUsers}/apply-leave`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('apply-leave', []))
    );
  }


  getleaveDetails(): Observable<LeaveDetails[]> {
    return this.http.get<LeaveDetails[]>(this.urlLeaveDetail)
      .pipe(
        tap(_ => console.log('fetched leave')),
        catchError(this.handleError<LeaveDetails[]>('getleaveDetails', []))
      );
  }

getRequest(): Observable<LeaveRequest[]> {
  return this.http.get<LeaveRequest[]>(this.urlRequest)
    .pipe(
      tap(_ => console.log('fetched request')),
      catchError(this.handleError<LeaveRequest[]>('getRequest', []))
    );
}

deleteRequest(user: LeaveRequest | string): Observable<LeaveRequest> {
  const id = typeof user === 'string' ? user : user.username;
  const url = `${this.urlRequest}/${user}`;

  return this.http.delete<LeaveRequest>(url, this.httpOptions).pipe(
    tap(_ => console.log(`deleted user username=${user}`)),
    catchError(this.handleError<LeaveRequest>('deleteRequest'))
  );
}



  }
