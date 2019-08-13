import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LeaveRequest } from './leaveRequest';


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
    const leaveDetails = [
      { username : 'Dr.Nice', from : '2019-03-25', to: '2019-03-27', days: '2', type : 'Personal', description: 'qweq' },
      { username : 'Dr.Nice', from : '2019-11-25', to: '2019-11-27', days: '2', type : 'LOP', description: 'qweq' },
      { username : 'Narco', from : '2019-06-06', to: '2019-06-07', days: '1', type : 'Carry Forward', description: 'zxcv' },
      { username : 'Narco', from : '2019-12-06', to: '2019-12-07', days: '1', type : 'Compensatory', description: 'zxcv' },
    ];
    const requestLeave = [
      {username : 'Dr.Nice', from : '2019-03-25', to: '2019-03-27', days: '2', type : 'Personal', description: 'qweq' },
      {username : 'Narco', from : '2019-06-06', to: '2019-06-07', days: '1', type : 'Carry Forward', description: 'zxcv' },
    ];

    return {users, leaveDetails, requestLeave};
  }


 /* incrementSno(requestLeaveNo: LeaveRequest[]): number {
    return requestLeaveNo.length > 0 ? Math.max(...requestLeaveNo.map(requestLeave => requestLeave.Sno)) + 1 : 1;
  }*/

}
