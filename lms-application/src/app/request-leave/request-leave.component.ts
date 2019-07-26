import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  requestLeave: any[] = [];
  
  constructor( private auth: AuthenticationService,) { }

  ngOnInit() {
    this.auth.getRequest().subscribe((data : any[])=>{
      console.log(data);
      this.requestLeave = data;
  })
  
} 
deleteRequest(username: string)
{
  this.auth.deleteRequest(username).subscribe(()=>{
    alert("Request Deleted");
});
}
}