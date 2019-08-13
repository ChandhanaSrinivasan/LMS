import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})

export class RequestLeaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
}
/*getRequest(): void {
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
*/
}
 