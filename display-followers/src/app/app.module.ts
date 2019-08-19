import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { FollowersComponent } from './followers/followers.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FetchUsersService } from './fetch-users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SearchComponent,
    NavbarComponent,
    FollowersComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
