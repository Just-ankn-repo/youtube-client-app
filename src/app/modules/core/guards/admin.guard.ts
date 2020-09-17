import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private isLogin: boolean;
  private username: string;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.isLoggedIn.subscribe( param => {
      this.username = param.username.toLowerCase();
      this.isLogin = param.authenticated;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (this.isLogin && this.username === 'admin') {
        return true;
      } else if (this.isLogin){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/auth']);
      }
  }
}
