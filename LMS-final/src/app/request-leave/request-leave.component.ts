import { Component, OnInit } from '@angular/core';
import { DbAccessService } from '../db-access.service';
import { LeaveRequest } from '../leaveRequest';


@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  requestLeave: any[] = [];
  

 
  constructor( private db: DbAccessService) { }

  ngOnInit() {
    this.getRequest();
}

requests=['']

addItem(newItem: string) {
  this.requests.push(newItem);

}

getRequest(): void {
  this.db.getRequest()
  .subscribe(requestLeave => this.requestLeave = requestLeave);
  
}
deleteRequest(user: LeaveRequest): void {
  this.requestLeave = this.requestLeave.filter(h => h !== user);
  this.db.deleteRequest(user).subscribe(() => {
    alert('Request Deleted');
});
}
acceptRequest(user: LeaveRequest): void {
  this.requestLeave = this.requestLeave.filter(h => h !== user);
  this.db.deleteRequest(user).subscribe(() => {
    alert('Request Accepted');
});
}
}
