import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  get valid() 
  { 
    return this.loginForm.controls;
  }

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
     
      'username' : [null,[Validators.required]],
      'password' : [null, [Validators.required]],
    });

    

  }

  login(formData: NgForm) {
    this.submitted = true;
   
     this.auth.login(formData).subscribe( 
      (user) => {
        this.router.navigate(['home']);
       
      });
    
  }

} 