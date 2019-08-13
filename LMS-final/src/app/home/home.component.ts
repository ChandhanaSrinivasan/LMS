import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
 
  constructor(private router: Router,public authService: AuthenticateService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
   
  }
  
  logout(): void {
    console.log(this.id);
    console.log("Logout"); 
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

