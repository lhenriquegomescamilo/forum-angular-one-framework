import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "app/auth/user.interface";
import { CookieService } from "angular2-cookie/services/cookies.service";
import * as _ from "lodash";

@Injectable()
export class AuthService {


  private _authenticated: boolean = false;
  private static readonly _USER_FROM_SESSION = "user_from_session";
  private _showNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _router: Router, private _cookierService: CookieService) { }

  signin(user: User): void {
    if ((user.email === 'user@email.com' || user.email === 'usuario@email.com')
      && user.password === '123456') {
      this._setUserOnSession(user);
      this._showEventEmitter(true);
      this._authenticated = true;
      this._router.navigate(["/"]);
    } else {
      this._authenticated = false;
    }
  }
  private _showEventEmitter(canShow: boolean): void {
    console.log("EMIT", canShow)
    this._showNavBar.emit(canShow);
  }
  private _setUserOnSession(user: User): void {
    this._cookierService.putObject(AuthService._USER_FROM_SESSION, user);
  }

  public get authenticated(): boolean {
    return this._authenticated;
  }
  public get showNavBar(): EventEmitter<boolean> {
    return this._showNavBar;
  }
  public get haveUserOnSession(): boolean {
    let userOnSession: User = this._cookierService.getObject(AuthService._USER_FROM_SESSION) as User;
    return !_.isEmpty(userOnSession);
  }

  public logout(): void {
    this._cookierService.remove(AuthService._USER_FROM_SESSION);
    this._authenticated = false;
    this._showEventEmitter(false);
    this._router.navigate(["login"]);
  }
}
