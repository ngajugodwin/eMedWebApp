import { AuthService } from './../_services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  model: any = {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(response => {
        console.log('Logged In Successfully');
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }

  loggedIn () {
    const token = localStorage.getItem('token');
    return !!token;
      // if token is available return true, else return false
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    console.log('Logged out successfully');
  }

}
