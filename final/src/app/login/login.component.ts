import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { LmsService} from '../lms.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = User[];
  selectedUser: User;
 
  constructor(private lmsService: LmsService) { }

  ngOnInit() {
    this.getUser();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  
  getUser(): void {
    this.user = this.lmsService.getUsers().subscribe(user => this.user = user);
  }
  
  public loginValidation()
{
  
}

  

}
