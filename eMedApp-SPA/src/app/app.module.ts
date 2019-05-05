import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**Routing Config */
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

/**Guards to protect links */
import { AuthGuard } from './_guards/auth.guard';

/**Components Section */
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

/**Services Section */
import { AuthService } from './_services/auth/auth.service';
import { AlertifyService } from './_services/alertify/alertify.service';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      LoginComponent,
      DashboardComponent,
      NavComponent,
      SidebarComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      AuthGuard,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
