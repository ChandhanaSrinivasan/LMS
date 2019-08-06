import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LeaveDetails } from '../leaveDetails';

@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.css']
})
export class LeaveSummaryComponent implements OnInit {
  leaveDetails: LeaveDetails[];

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.getleaveDetails();
  }
getleaveDetails(): void {
    this.auth.getleaveDetails()
  .subscribe(leaveDetails => this.leaveDetails = leaveDetails);
    console.log('Leave Details');
}

}
