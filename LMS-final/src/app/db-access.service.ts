import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LeaveRequest } from './leaveRequest';
import { LeaveDetails } from './leaveDetails';


@Injectable({
  providedIn: 'root'
})
export class DbAccessService {
  From: string;
  To: string;
  NoOfDays: string;
  Type: string;
  Description: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private  urlLeaveDetail = 'api/leaveDetails';
   private urlRequest = 'api/requestLeave';  

   private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
 
       
       console.error(error); 
       
       console.log(`${operation} failed: ${error.message}`);
       
       return of(result as T);
     };
   }
  constructor(private http: HttpClient, private router: Router) { }

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
getleaveDetails(): Observable<LeaveDetails[]> {
  return this.http.get<LeaveDetails[]>(this.urlLeaveDetail)
    .pipe(
      tap(_ => console.log('fetched leave')),
      catchError(this.handleError<LeaveDetails[]>('getleaveDetails', []))
    );
}
apply(fromDate: string, toDate:string, noOfDays:string, typeOfLeave: string, description: string)
{
  /* this.From = fromDate;
  this.To = toDate;
  this.NoOfDays = noOfDays;
  this.Type = typeOfLeave;
  this.Description = description; */

console.log(fromDate,toDate,noOfDays,typeOfLeave, description);
}

}
