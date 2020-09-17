import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  constructor(private auth: AuthService,
              private router: Router) { }

  public ngOnInit(): void { }

  public login($event: Event): void {
    this.auth.login($event.target[0].value);
    this.router.navigate(['']);
  }
}
