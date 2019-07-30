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
 private  urlLeaveDetail='api/leaveDetails';
  private urlRequest = 'api/requestLeave';  // URL to web api

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

  constructor(private http: HttpClient, private router: Router) { }


  login(formData: NgForm) {
    return this.http.post<User>( `${this.urlUsers}/login`, formData).pipe(
      tap(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

      }),
      catchError(this.handleError('login', []))
    );
  }

  apply(formData: NgForm) {
    return this.http.post<User>( `${this.urlUsers}/apply-leave`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('apply-leave', []))
    );
  }




getRequest (): Observable<LeaveRequest[]> {
  return this.http.get<LeaveRequest[]>(this.urlRequest)
    .pipe(
      tap(_ => console.log('fetched user')),
      catchError(this.handleError<LeaveRequest[]>('requestLeave', []))
    );
}
  

deleteRequest (user: LeaveRequest | string): Observable<LeaveRequest> {
  const username = typeof user === 'string' ? user : user.username;
  const url = `${this.urlRequest}/${username}`;

  return this.http.delete<LeaveRequest>(url, this.httpOptions).pipe(
    tap(_ => console.log(`deleted user username=${username}`)),
    catchError(this.handleError<LeaveRequest>('requestLeave'))
  );
}
getLeaveDetails (): Observable<LeaveDetails[]> {
  return this.http.get<LeaveDetails[]>(this.urlLeaveDetail)
    .pipe(
      tap(_ => console.log('fetched user')),
      catchError(this.handleError<LeaveDetails[]>('leaveDetails'))
    );
}



  }
