import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    if (username === 'dev' && password === 'dev1234') {
      return 200;
    }
    return 403;
  }
}
