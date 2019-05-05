import { AlertifyService } from './../_services/alertify/alertify.service';
import { AuthService } from './../_services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private alertify: AlertifyService) { }
  model: any = {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(response => {
        this.alertify.success('Logged In Successfully');
    }, error => {
      this.alertify.error('Invalid username or password');
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }

  loggedIn () {
    const token = localStorage.getItem('token');
    return !!token;
      // if token is available return true, else return false
  }
}
