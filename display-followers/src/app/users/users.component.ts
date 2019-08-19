import {Component, OnInit} from '@angular/core';
import {Users} from "../users";
import { FetchUsersService } from "../fetch-users.service";
import {  Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged
 } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class UsersComponent implements OnInit {
    title = 'Welcome to Github';


    cache = {
        Users: [],
        selectedUsers: [],
    };

    Users: Users[] = [];
    search: Subject<string> = new Subject<string>();
    selectedUsers: Users = new Users();
    loadingFollowers: boolean = false;


    constructor(private FetchUsersService: FetchUsersService) {

   
    }

    ngOnInit() {


        this.FetchUsersService.getUsers().subscribe(res => {

            this.cache.Users = res; // store cached for next time.

            this.Users = res;
        }, error => {

            console.log(error); // for development only.
        });

    }

  

    go(s: string) {

        if (s == 'home') {

            this.selectedUsers = new Users();
            this.Users = this.cache.Users;
        }
    }

    viewUsers(Users: Users) {

        this.selectedUsers = Users;

        let UsersInCache: Users = this.findUsersInCache(Users);
        // let find if existing in cache we return and no longer call to api again
        if (UsersInCache) {
            this.selectedUsers = UsersInCache;
        } else {
            // get followers of this Users
            this.loadingFollowers = true;

            this.FetchUsersService.getUserFollowers(Users.login).subscribe(res => {
                this.selectedUsers.followers = res as Users[];

                this.cacheSelectUsers(this.selectedUsers);

                this.loadingFollowers = false;

            }, err => {
                console.log(err);
                this.loadingFollowers = false;
            });

        }


    }

   
    cacheSelectUsers(Users: Users) {
        if (!this.findUsersInCache(Users)) {
            this.cache.selectedUsers.push(Users);
        }

    }

    findUsersInCache(Users: Users): Users {

        for (var i = 0; i < this.cache.selectedUsers.length; i++) {
            if (this.cache.selectedUsers[i].login == Users.login) {
                return this.cache.selectedUsers[i];
            }
        }

        return null;
    }
}