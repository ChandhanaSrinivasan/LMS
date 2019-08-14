import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DbAccessService } from '../db-access.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  applyForm: FormGroup;
  
  @Output() applyEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private db: DbAccessService) { }

    ngOnInit() {
    this.applyForm = this.fb.group({
      fromDate : [null, Validators.required],
      toDate : [null, Validators.required],
      noOfDays : [null, Validators.required],
      typeOfLeave : [null, Validators.required],
      description : [null, Validators.required],
    });

  }

  apply(from: string, to: string, no: string, type: string, description: string) {
    this.applyEvent.emit(from);
    this.applyEvent.emit(to);
    this.applyEvent.emit(no);
    this.applyEvent.emit(type);
    this.applyEvent.emit(description);
    
  }

}
