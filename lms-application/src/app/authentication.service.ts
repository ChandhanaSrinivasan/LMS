import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  

  apiUrl = 'api/users';


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
    return this.http.post<any>( `${this.apiUrl}/login`, formData).pipe(
      tap(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

      }),
      catchError(this.handleError('login', []))
    );
  }

  /*apply(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/apply-leave`, formData).pipe(
      tap(userDetail => {
        if (userDetail && userDetail.token) {
          localStorage.setItem('currentUser', JSON.stringify(userDetail));
        }
      }),
      catchError(this.handleError('apply-leave', []))
    );
    }*/
  }
