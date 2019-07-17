import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  static user: any;
  createDb() {
    const users = [
      { username: 'Narco', password: '123456' },
      
      
    ];
    return {users};
  }

  
}