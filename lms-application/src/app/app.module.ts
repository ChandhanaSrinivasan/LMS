import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';

import { LoginComponent } from './login/login.component';

import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';




@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    HomePageComponent,
    
    ApplyLeaveComponent,
    
    LeaveSummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false,
  passThruUnknownUrl: true }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }