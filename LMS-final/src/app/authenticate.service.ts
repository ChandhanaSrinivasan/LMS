import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 

}
