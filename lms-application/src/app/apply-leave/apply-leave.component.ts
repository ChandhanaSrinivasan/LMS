import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LeaveRequest } from '../leaveRequest';
import { User } from '../user';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  applyForm: FormGroup;
  request: LeaveRequest[];
  users: User[];

  @Output() addNewLeave = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
    this.applyForm = this.fb.group({
      fromDate : [null, Validators.required],
      toDate : [null, Validators.required],
      noOfDays : [null, Validators.required],
      typeOfLeave : [null, Validators.required],
      description : [null, Validators.required],
    });

  }
  addNewInput(value1: string, value2: string, value3: string, value4: string, value5: string) {
    this.addNewLeave.emit(value1);
    this.addNewLeave.emit(value2);
    this.addNewLeave.emit(value3);
    this.addNewLeave.emit(value4);
    this.addNewLeave.emit(value5);
    alert('Leave Applied');
    this.router.navigate(['request-leave']);

  }
  /*apply(formData: NgForm) {
      return this.auth.apply(formData).subscribe(
        (user) => {
          console.log(`Updated leave details${JSON.stringify(user)}`);
          this.router.navigate(['leave-summary']);
        });
    }*/

  }


