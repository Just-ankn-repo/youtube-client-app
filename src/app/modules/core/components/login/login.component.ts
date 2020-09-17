import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private isLogin: boolean;
  public username: string = 'Login';

  constructor(private auth: AuthService,
              private router: Router) { }

  public ngOnInit(): void {
    this.auth.isLoggedIn.subscribe( param => {
      this.username = param.username !== '' ? param.username : 'Login';
      this.isLogin = param.authenticated;
    });
  }

  public loginLogout(): boolean {
    if (this.isLogin) {
      this.auth.logout();
    }
    this.router.navigate(['/auth']);

    return false;
  }

}
