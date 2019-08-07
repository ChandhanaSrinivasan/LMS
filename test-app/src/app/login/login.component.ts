import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {AuthService } from '../auth.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
    
  user: User;
 
    get valid() {
      return this.loginForm.controls;
    }
    constructor(private formBuilder: FormBuilder, private auth: AuthService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
      }
      
    login() {
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.username, this.loginForm.value.password);
      return this.auth.post(this.loginForm.value).subscribe(user => this.user = user);
    
      
    }
    
}
