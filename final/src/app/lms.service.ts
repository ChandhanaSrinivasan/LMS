import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './user';
import { InMemoryDataService} from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class LmsService {
  
  user: users[];
  username: string;
  password: string;
  private usersUrl = 'api/users';
  constructor(
    private http: HttpClient,
  ) { }

  public credentialValidation(username:string,password:string)
  {
    if((this.username==InMemoryDataService.user.username)&&(this.password==InMemoryDataService.user.password))
    {
      return true;
    }
    else{
      return false;
    }
  }

  
}
