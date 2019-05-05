import { AlertifyService } from './../../_services/alertify/alertify.service';
import { AuthService } from './../../_services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService,
      private alertify: AlertifyService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.alertify.message('Logout Successfully');
  }

}
