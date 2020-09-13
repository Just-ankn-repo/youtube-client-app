import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  constructor(private router: Router) { }

  public ngOnInit(): void { }

  public login($event: Event): void {
    localStorage.setItem('access_token', 'testToken');
    localStorage.setItem('user_name', $event.target[0].value);
    this.router.navigate(['']);
  }
}
