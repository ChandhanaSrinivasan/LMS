import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LeaveRequest } from '../leaveRequest';

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  requestLeave: any[] = [];
  
  constructor( private auth: AuthenticationService,) { }

  ngOnInit() {
    this.getRequest();
  
} 
getRequest(): void {
  this.auth.getRequest()
  .subscribe(requestLeave => this.requestLeave = requestLeave);
}


/*deleteRequest(username: string)
{
  this.auth.deleteRequest(username).subscribe(()=>{
    alert("Request Deleted");
});
}
*/
deleteRequest(user: LeaveRequest): void {
  this.requestLeave = this.requestLeave.filter(h => h !== user);
  this.auth.deleteRequest(user).subscribe(()=>{
    alert("Request Deleted");
});
}

}