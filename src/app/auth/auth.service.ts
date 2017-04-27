import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/services/cookies.service";
import * as _ from "lodash";
import { ContactsModel } from "app/models/contacts.model";
import { ContactSession } from "app/models/contacts-session.model";
import { ContactsService } from "app/contacts/contacts.service";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import { BASE_URL } from "app/base-url";

@Injectable()
export class AuthService {


  private _authenticated: boolean = false;
  private static readonly _USER_FROM_SESSION = "user_from_session";
  private _showNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _router: Router, private _cookierService: CookieService, private _http: Http) { }

  private _auth(email: String, password: string): Observable<ContactSession> {
    let headers: Headers = new Headers({ email: email, password: password });
    return this._http
      .post(BASE_URL + "/contacts/auth", {}, { headers: headers })
      .map((response) =>  new ContactSession(response.headers.get("token"), response.json()));
  }

  signin(contact: ContactsModel): void {
    // this._auth(contact.email, contact.password).subscribe((contactSession) => {
    //   console.log(contactSession);

    // }, error => {
    //   console.log(error);
    //   if (error.status == 401) {
    //     //TODO: Handle user or password incorrect 
    //   } else {

    //   }
    // });
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
