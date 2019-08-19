import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "./users";
import {ApiService} from "./api.service";

@Injectable()
export class FetchUsersService {

    constructor(private api: ApiService) {

    }


    getUsers(filter?: string): Observable<Users[]> {

        let endPoint = '/users';

        return this.api.get(endPoint).map(res => res.json() as Users[]).catch(err => Observable.throw(err));
    }

   

}