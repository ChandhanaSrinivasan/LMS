import { Component, OnInit } from '@angular/core';
import { DbAccessService } from '../db-access.service';
import { LeaveDetails } from '../leaveDetails';
import { AuthenticateService } from '../authenticate.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.css']
})
export class LeaveSummaryComponent implements OnInit {
  id: string;
  leaveDetails: LeaveDetails[];

  constructor(private router: Router,public authService: AuthenticateService, private db: DbAccessService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.getleaveDetails();
  }
  logout(): void {
    console.log(this.id);
    alert("Logout"); 
    this.authService.logout();
    this.router.navigate(['/login']);
  }
getleaveDetails(): void {
    this.db.getleaveDetails()
  .subscribe(leaveDetails => this.leaveDetails = leaveDetails);
   
}

}
