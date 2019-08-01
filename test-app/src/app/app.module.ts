import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
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
