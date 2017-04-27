import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ContactsModel } from '../models/contacts.model';
import { ContactSession } from "../models/contacts-session.model";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BASE_URL } from "app/base-url";

@Injectable()
export class ContactsService {

  private contactsURL: string = BASE_URL+ "/contacts/";
  constructor(private _http: Http) { }

  save(contact: ContactsModel): Observable<ContactsModel> {
    return this._http.post(this.contactsURL, contact)
      .map((response) => {
        return response.json();
      });
  }

  update(contact: ContactsModel): Observable<ContactsModel> {
    return this._http.put(this.contactsURL + contact.id, { name: contact.name, phoneNumber: contact.phoneNumber })
      .map((response) => {
        return response.json();
      });
  }

  delete(contact: ContactsModel): Observable<ContactsModel> {
    return this._http.delete(this.contactsURL + contact.id)
      .map((response: Response) => {
        return response.json();
      });
  }

  getAll(): Observable<[ContactsModel]> {
    return this._http.get(this.contactsURL).map((response: Response) => {
      return response.json();
    });
  }

  auth(email: String, password: string) : Observable<ContactSession>{
    let headers : Headers = new Headers({ email: email, password: password });
    return this._http.post(this.contactsURL + "auth", {}, {headers : headers}).map((response) => {
      return new ContactSession(response.headers.get("token"), response.json());
    });
  }
}
