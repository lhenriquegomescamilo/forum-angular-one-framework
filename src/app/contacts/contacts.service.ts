import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ContactsModel } from '../models/contacts.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  private serviceBase: string = "http://localhost:3000/v1"
  private contactsURL: string = this.serviceBase + "/contacts/";
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

}
