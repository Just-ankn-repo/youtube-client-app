import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

interface IAuth {
  username: string;
  authenticated: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new Subject<IAuth>();

  constructor() { }

  public logout(): void {
    this.authSubject.next({
      username: '',
      authenticated: false
    });
  }

  public login(userName: string): void {
    this.authSubject.next({
      username: userName,
      authenticated: true
    });
  }

  get isLoggedIn(): Observable<IAuth> {
    return this.authSubject.asObservable();
  }

}
