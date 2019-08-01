import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {AuthService } from '../auth.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    submitted = false;
  user: User;
  
    get valid() 
    { 
      return this.loginForm.controls;
    }
    constructor(private formBuilder: FormBuilder, private auth: AuthService,private route: ActivatedRoute,) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['',Validators.required]
        });
      }

    login() {
        this.submitted = true;
      console.log(this.loginForm.value.username,this.loginForm.value.password);
      this.auth.login(this.loginForm.value.username,this.loginForm.value.password);
    }  
   /* login(): void {
    const username = +this.route.snapshot.paramMap.get('username');
    this.auth.login(this.loginForm.value.username,this.loginForm.value.password)
      .subscribe(user => this.user = user);
  } */
}
