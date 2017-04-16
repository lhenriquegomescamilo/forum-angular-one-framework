import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from "app/app.router";
import { LoginComponent } from './login/login.component';
import { AuthGuardianService } from "app/auth/auth-guardian.service";
import { AuthService } from "app/auth/auth.service";
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [CookieService,AuthGuardianService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
