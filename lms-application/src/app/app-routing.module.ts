import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'apply-leave', component: ApplyLeaveComponent},
  { path: 'leave-summary', component: LeaveSummaryComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
