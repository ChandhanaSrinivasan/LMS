import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { empId: '1101', username: 'Dr.Nice', password: 'welcome', noOfDays: 2 , role: 'employee'},
      { empId: '1102', username: 'Narco', password: 'welcome', noOfDays: 2 , role: 'primary manager'}
    ];
    return {users};
  }



post(reqInfo: RequestInfo) {

    if (reqInfo.id === 'login') {
      console.log('User Details');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].empId === user.empId && reqInfo.req['body'].username === user.username && reqInfo.req['body'].password === user.password ;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            empId: users.empId,
            username: users.username,
            noOfDays: users.noOfDays,
            
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with username='${reqInfo.req['body'].username}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;


      });


    } 
  }

}