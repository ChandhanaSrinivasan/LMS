import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApplyService } from '../apply.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  userModel = new User("2019-02-19", "2019-02-09", 2, "carryForwardLeave", "wqwer");
  constructor(private applyService: ApplyService) { }

  ngOnInit() {

  }
  public apply() {
    console.log(this.userModel);
    this.applyService.applyPost().subscribe();
  }
}
