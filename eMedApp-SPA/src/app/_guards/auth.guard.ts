import { AlertifyService } from './../_services/alertify/alertify.service';
import { AuthService } from './../_services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
      private router: Router, private alertify: AlertifyService) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('You do not have sufficient permission!');
    this.router.navigate(['/login']);
    return false;
  }
}
