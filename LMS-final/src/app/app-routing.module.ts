import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';


const routes: Routes = [
  { path: 'login', 
  component: LoginComponent },
  { path: 'home',
   component: HomeComponent,
   canActivate: [AuthGuard] },
  { path: '',
   component: HomeComponent,
  canActivate: [AuthGuard]
  },
  { path: 'apply-leave',
    component: ApplyLeaveComponent,
    canActivate: [AuthGuard]
  },
  { path: 'leave-summary',
    component: LeaveSummaryComponent,
    canActivate: [AuthGuard]
  },
  { path: 'leave-request',
    component: RequestLeaveComponent,
   // canActivate: [AuthGuard]
  }
  
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
