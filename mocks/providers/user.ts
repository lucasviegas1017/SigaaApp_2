import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { User } from '../../models/user';

//import { Api } from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class UserProvider {
  loggedUser() {
    throw new Error('Method not implemented.');
  }
  _user: any;
  users: User[] = [];

  constructor() { 
    let userList = [
      {
        username: '190058986',
        password: 'test'
      },
      {
        username: '111',
        password: 'test'
      },
      // Adicionar mais contas
  
    ];

    for (let user of userList) {
      this.users.push(new User(user));
    }
  
  };

  login(user: any) {
    
    for (let u of this.users) {
      if(u.username == user.username && u.password == user.password) {
        this._loggedIn(user);
        return true;
      }  
    }
  
    return false;
  }

  
  /**
   * Log the user out, which forgets the session
   */
  logout() {
   
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(user) {
    this._user = user;
  }
  _loggedUser(){
    return this._user;
  }
}
