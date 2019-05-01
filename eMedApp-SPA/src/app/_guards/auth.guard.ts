import { AuthService } from './../_services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
      private router: Router) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    console.log('You do not have permission to view this page!');
    this.router.navigate(['/login']);
    return false;
  }
}
