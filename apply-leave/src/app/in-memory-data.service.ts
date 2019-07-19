import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {fromDate:"2019-02-12", toDate: "2019-02-14", noOfDays:2, typeOfLeave:"PersonalLeave", description:"qwerty"}
      
    ];
    return {users};
  }

}