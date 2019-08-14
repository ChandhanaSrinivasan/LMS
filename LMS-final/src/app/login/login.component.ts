import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthenticateService } from '../authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User = { username: "user", password: "user" };
  loginForm: FormGroup;
  message: string;
  goto: string;

  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthenticateService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.goto = '/home';
    
  }


  get formControl() { 
    return this.loginForm.controls;
   }

  
  login() {
    if (this.loginForm.invalid) {
        return false;
    }
    else{
      if(this.formControl.username.value == this.users.username && this.formControl.password.value == this.users.password){
        alert("Login successful");
        
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.formControl.username.value);
        this.router.navigate([this.goto]);
      }
      else{
        this.message = "Username or Password incorrect";
      }
    }    
}

}
