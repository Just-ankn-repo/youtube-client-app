import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string

  constructor(@Inject(AuthService) private auth: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.title = JSON.parse(localStorage.getItem('user_name')) || 'Login'
  }

  loginLogout() {
    console.log(this.auth.isLoggedIn)
    if (this.auth.isLoggedIn) {
      this.auth.logout();
    }
    this.title = 'Login';
    this.router.navigate(['/auth']);

    return false;
  }

}
