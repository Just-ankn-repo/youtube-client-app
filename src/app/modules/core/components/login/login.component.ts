import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string

  constructor(private auth: AuthService,
              private router: Router) { }

  public ngOnInit(): void {
    this.username = localStorage.getItem('user_name') || 'Login';
  }

  loginLogout() {
    console.log(this.auth.isLoggedIn)
    if (this.auth.isLoggedIn) {
      this.auth.logout();
    }
    this.username = 'Login';
    this.router.navigate(['/auth']);

    return false;
  }

}
