import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  get empIdErr()
  {
    return this.loginForm.get('empId')
  }
  get usernameErr()
  {
    return this.loginForm.get('username')
  }
  get passwordErr()
  {
    return this.loginForm.get('password')
  }

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'empId' : [null, [Validators.required]],
      'username' : [null,[Validators.required]],
      'password' : [null, [Validators.required]],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home' ;

  }

  login(formData: NgForm) {
    return this.auth.login(formData).subscribe(
      (user) => {
        console.log(user);
        this.router.navigate([this.returnUrl]);
      });
  }

}