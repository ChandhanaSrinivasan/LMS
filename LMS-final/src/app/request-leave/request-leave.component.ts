import { Component, OnInit } from '@angular/core';
import { DbAccessService } from '../db-access.service';
import { LeaveRequest } from '../leaveRequest';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';


@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  id: string;
  requestLeave: any[] = [];
  

 
  constructor(private router: Router,public authService: AuthenticateService, private db: DbAccessService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.getRequest();
}

logout(): void {
  console.log(this.id);
  alert("Logout"); 
  this.authService.logout();
  this.router.navigate(['/login']);
}

requests=['']

addRequest(newRequest: string) {
  this.requests.push(newRequest);

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
