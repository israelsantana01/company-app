import { Injectable } from '@angular/core';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private mAuthenticated = true;

  get authenticated() {
    return this.mAuthenticated;
  }

  login(user: User) {
    if (user.username === 'root' && user.password === 'admin') {
      this.mAuthenticated = true;
    }
  }

  logout() {
    this.mAuthenticated = false;
  }
}
