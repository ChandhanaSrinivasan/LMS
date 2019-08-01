import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { username: 'Dr.Nice', password: '123456', noOfDays: 2 , role: 'employee'},
      { username: 'Narco', password: '789546', noOfDays: 1 , role: 'primary manager'}
    ];
    return{users};
  }
}

