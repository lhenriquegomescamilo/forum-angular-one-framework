import { Component, OnInit } from '@angular/core';
import { ContactsModel } from "app/models/contacts.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ContactsService } from "app/contacts/contacts.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.css']
})
export class ContactsShowComponent implements OnInit {

  private _selectContact: ContactsModel;
  constructor(private _router: Router, private _activedRouter: ActivatedRoute, private _contactService: ContactsService) { }

  ngOnInit() {
    this._activedRouter
      .params
      .subscribe((params: any) => {
        this._contactService
          .contactById(_.toNumber(params["id"]))
          .subscribe((contact) => {
            if (contact) {
              this.selectContact = contact;
            }
          }, error => {
            console.log(error);
            //TODO: handle error
          });

      });
  }

  get selectContact(): ContactsModel {
    return this._selectContact;
  }

  set selectContact(value: ContactsModel) {
    this._selectContact = value;
  }
}
