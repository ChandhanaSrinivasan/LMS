import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { LmsService} from '../lms.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() user:User;
 
  constructor() { }

  ngOnInit() {
  }

  public loginValidation()
  {
    if(LmsService.credentialValidation(username,password)==true)
    {
      alert("Login Successul");
    }
    else{
      alert("Login Failed");
    }
  }

}
