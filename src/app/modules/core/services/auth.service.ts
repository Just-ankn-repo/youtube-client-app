import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

interface IAuth {
  username: string;
  authenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject: BehaviorSubject<IAuth>;

  constructor() {
    const username = localStorage.getItem('username');
    const authenticated = localStorage.getItem('authenticated') === 'true';
    this.authSubject = new BehaviorSubject<IAuth>({
      username: username,
      authenticated: authenticated
    })
  }

  public logout(): void {
    localStorage.setItem('username', '');
    localStorage.setItem('authenticated', 'false');

    this.authSubject.next({
      username: '',
      authenticated: false
    });
  }

  public login(userName: string): void {
    localStorage.setItem('username', userName);
    localStorage.setItem('authenticated', 'true');

    this.authSubject.next({
      username: userName,
      authenticated: true
    });
  }

  get isLoggedIn(): Observable<IAuth> {
    return this.authSubject.asObservable();
  }

}
