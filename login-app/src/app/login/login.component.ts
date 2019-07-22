import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  empId: string;
  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder) { }
loginForm = this.formBuilder.group({
  empId: ['',Validators.required],
  username: ['',Validators.required],
  password: ['',Validators.required],
})
  ngOnInit() {
  }
/*loginForm = new FormGroup({
  empId: new FormControl(''),
  username: new FormControl(''),
  password: new FormControl('')
})*/


public login()
{
  console.log(this.loginForm.value);
  
}
}
