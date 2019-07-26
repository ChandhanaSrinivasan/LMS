import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  applyForm: FormGroup;
  //returnUrl: string;
  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }

    ngOnInit() {
    this.applyForm = this.fb.group({
      'fromDate' : [null, Validators.required],
      'toDate' : [null, Validators.required],
      'noOfDays' : [null,Validators.required],
      'typeOfLeave' : [null, Validators.required],
      'description' : [null, Validators.required],
    });

  }

    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/leave-summary' ;
    apply(FormData: NgForm){
      return this.auth.apply(FormData).subscribe( 
        (user) => {
          console.log(`Updated leave details${JSON.stringify(user)}`);
          this.router.navigate(['leave-summary']);
        });
    }

  } 

  

