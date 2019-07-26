import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.css']
})
export class LeaveSummaryComponent implements OnInit {
  leaveDetails: any[];
  

  constructor(private auth: AuthenticationService,) { }

  ngOnInit() {
    this.auth.getLeaveDetails().subscribe((data : any[])=>{
      console.log(data);
      this.leaveDetails = data;
  })
  }

}
