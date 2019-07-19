import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LmsService {
  users = USERS;
  selectedUser: User;

  constructor(
    
  ) { }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  public username= this.users[0].username;
  public password= this.users[0].password;


  public credentialValidation(username:string,password: string)
{
 
  console.log(this.username);
  console.log(this.password);
}

getUsers(): Observable<User[]> {
  return of(USERS);
}
  
}
