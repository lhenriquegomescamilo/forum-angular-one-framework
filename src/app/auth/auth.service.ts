import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/services/cookies.service";
import * as _ from "lodash";
import { ContactsModel } from "app/models/contacts.model";

@Injectable()
export class AuthService {


  private _authenticated: boolean = false;
  private static readonly _USER_FROM_SESSION = "user_from_session";
  private _showNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _router: Router, private _cookierService: CookieService) { }

  signin(contact: ContactsModel): void {
    if ((contact.email === 'user@email.com' || contact.email === 'usuario@email.com')
      && contact.password === '123456') {
      this._setUserOnSession(contact);
      this._showEventEmitter(true);
      this._authenticated = true;
      this._router.navigate(["/"]);
    } else {
      this._authenticated = false;
    }
  }
  private _showEventEmitter(canShow: boolean): void {
    this._showNavBar.emit(canShow);
  }
  private _setUserOnSession(contact: ContactsModel): void {
    this._cookierService.putObject(AuthService._USER_FROM_SESSION, contact);
  }

  public get authenticated(): boolean {
    return this._authenticated;
  }
  public get showNavBar(): EventEmitter<boolean> {
    return this._showNavBar;
  }
  public get haveUserOnSession(): boolean {
    let userOnSession: ContactsModel = this._cookierService.getObject(AuthService._USER_FROM_SESSION) as ContactsModel;
    return !_.isEmpty(userOnSession);
  }

  public logout(): void {
    this._cookierService.remove(AuthService._USER_FROM_SESSION);
    this._authenticated = false;
    this._showEventEmitter(false);
    this._router.navigate(["login"]);
  }
}
