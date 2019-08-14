import { Component, OnInit } from '@angular/core';
import { DbAccessService } from '../db-access.service';
import { LeaveDetails } from '../leaveDetails';
import { AuthenticateService } from '../authenticate.service'
@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.css']
})
export class LeaveSummaryComponent implements OnInit {
  leaveDetails: LeaveDetails[];

  constructor(private db: DbAccessService) { }

  ngOnInit() {
    
    this.getleaveDetails();
  }
getleaveDetails(): void {
    this.db.getleaveDetails()
  .subscribe(leaveDetails => this.leaveDetails = leaveDetails);
   
}

}
