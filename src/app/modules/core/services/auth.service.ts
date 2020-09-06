import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: boolean;

  constructor() { }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_name');
  }

  get isLoggedIn(): boolean {
    const getAccessToken:string = localStorage.getItem('access_token');
    return getAccessToken === 'testToken';
  }

}
