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
import { HomeComponent } from './home/home.component';
import { HomeModule } from "app/home/home.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    APP_ROUTING
  ],
  providers: [CookieService,AuthGuardianService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
