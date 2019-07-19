import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { LmsService } from '../lms.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User[];

  //selectedUser: User;

  constructor(private lmsService: LmsService) { }

  ngOnInit() {
    this.getUser();
  }
  /*onSelect(user: User): void {
    this.selectedUser = user;
  }
  */
  getUser(): void {


    this.lmsService.getUsers().subscribe(user => {
      console.log("Data ::::::::", user);
      this.user = user
    });

  }

  public loginValidation() {

  }



}
