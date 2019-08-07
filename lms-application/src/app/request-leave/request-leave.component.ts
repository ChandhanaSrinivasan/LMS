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
  inputs = [];

  add(newInput: string) {
    this.inputs.push(newInput);
  }
  constructor( private auth: AuthenticationService) { }

  ngOnInit() {
    this.getRequest();
}
getRequest(): void {
  this.auth.getRequest()
  .subscribe(requestLeave => this.requestLeave = requestLeave);
  console.log(this.requestLeave);
}
deleteRequest(user: LeaveRequest): void {
  this.requestLeave = this.requestLeave.filter(h => h !== user);
  this.auth.deleteRequest(user).subscribe(() => {
    console.log(user.username);
    alert('Request Deleted');
});
}
acceptRequest(user: LeaveRequest): void {
  this.requestLeave = this.requestLeave.filter(h => h !== user);
  this.auth.deleteRequest(user).subscribe(() => {
    console.log(user);
    alert('Request Accepted');
});
}
}
