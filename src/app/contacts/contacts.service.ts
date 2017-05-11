import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ContactsModel } from '../models/contacts.model';
import { ContactSession } from "../models/contacts-session.model";
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { BASE_URL } from "app/base-url";
import * as _ from "lodash";

@Injectable()
export class ContactsService {

  private contactsURL: string = BASE_URL + "/contacts/";

  contactsChanged = new EventEmitter<Observable<ContactsModel[]>>();

  constructor(private _http: Http, private _authService: AuthService) { }

  save(contact: ContactsModel): Observable<ContactsModel> {
    return this._http
      .post(this.contactsURL, contact)
      .map((response) => response.json().data)
      .do(data => this.contactsChanged.emit(this.getAll()))
  }

  update(contact: ContactsModel): Observable<ContactsModel> {
    console.log(contact);
    let authToken = this._authService.currentContactSessionToken;
    if (authToken) {
      let headers: Headers = new Headers({ Authorization: 'Bearer ' + authToken });
      return this._http
        .put(this.contactsURL + contact.id, { name: contact.name, phoneNumber: contact.phoneNumber }, { headers: headers })
        .map((response) => response.json().data)
        .do(data => this.contactsChanged.emit(this.getAll()));
    } else {
      return Observable.throw(new Error('Not authenticated'));
    }

  }

  delete(contact: ContactsModel): Observable<ContactsModel> {
    let authToken = this._authService.currentContactSessionToken;
    if (authToken) {
      let headers: Headers = new Headers({ Authorization: 'Bearer ' + authToken });
      return this._http
        .delete(this.contactsURL + contact.id, { headers: headers })
        .map((response: Response) => response.json())
        .do(data => this.contactsChanged.emit(this.getAll()));
    } else {
      return Observable.throw(new Error('Not authenticated'));
    }
  }

  contactById(id: number): Observable<ContactsModel> {
    let authToken = this._authService.currentContactSessionToken;
    if (authToken) {
      let headers: Headers = new Headers({ Authorization: 'Bearer ' + authToken });
      return this._http.get(this.contactsURL + String(id), { headers: headers })
        .map((response: Response) => {
          return (_.isEmpty(response.json())) ? null : response.json();
        });
    } else {
      return Observable.throw(new Error('Not authenticated'));
    }
  }

  getAll(): Observable<[ContactsModel]> {
    let authToken = this._authService.currentContactSessionToken;
    if (authToken) {
      let headers: Headers = new Headers({ Authorization: 'Bearer ' + authToken });
      return this._http.get(this.contactsURL, { headers: headers }).map((response) => {
        return response.json();
      });
    } else {
      return Observable.throw(new Error('Not authenticated'));
    }
  }


}
