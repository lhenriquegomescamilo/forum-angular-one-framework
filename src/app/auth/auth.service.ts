import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/services/cookies.service";
import * as _ from "lodash";
import { ContactSession } from "app/models/contacts-session.model";
import { ContactsService } from "app/contacts/contacts.service";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import { BASE_URL } from "app/base-url";
import { ContactsModel } from "app/models/contacts.model";

@Injectable()
export class AuthService {


  private static readonly _USER_FROM_SESSION = "user_from_session";
  private _showNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _router: Router, private _cookierService: CookieService, private _http: Http) { }

  signin(contact: ContactsModel): void {
    this._auth(contact.email, contact.password)
      .subscribe((contactSession) => {
        this._setUserOnSession(contactSession);
        this._showEventEmitter(true);
        this._router.navigate(["/"]);
      }, error => {
        console.log(error);
        if (error.status == 401) {
          //TODO: Handle user or password incorrect 
          // Depois luciano
        } else {

        }
      });
  }

  private _auth(email: String, password: string): Observable<ContactSession> {
    let headers: Headers = new Headers({ email: email, password: password });
    return this._http
      .post(BASE_URL + "/contacts/auth", {}, { headers: headers })
      .map((response) => new ContactSession(response.headers.get("token"), response.json()));
  }

  private _showEventEmitter(canShow: boolean): void {
    this._showNavBar.emit(canShow);
  }
  private _setUserOnSession(contactSession: ContactSession): void {
    this._cookierService.putObject(AuthService._USER_FROM_SESSION, contactSession);
  }

  public get showNavBar(): EventEmitter<boolean> {
    return this._showNavBar;
  }

  public get haveUserOnSession(): boolean {
    this._showEventEmitter(true);
    return !_.isEmpty(this.currentContactSession);
  }

  public get currentContactSession(): ContactSession {
    return this._cookierService.getObject(AuthService._USER_FROM_SESSION) as ContactSession;
  }

  public get currentContactSessionToken(): string {
    let currentSession: ContactSession = this.currentContactSession;
    return (currentSession) ? currentSession.authToken : null;
  }

  public logout(): void {
    this._cookierService.remove(AuthService._USER_FROM_SESSION);
    this._showEventEmitter(false);
    this._router.navigate(["login"]);
  }
}
