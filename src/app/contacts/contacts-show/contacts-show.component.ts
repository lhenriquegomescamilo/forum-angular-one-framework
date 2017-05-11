import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsModel } from "app/models/contacts.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ContactsService } from "app/contacts/contacts.service";
import * as _ from 'lodash';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.css']
})
export class ContactsShowComponent implements OnInit, OnDestroy {
  private _selectContact: ContactsModel;
  private _subscription: Subscription;
  private _contactId: number;
  constructor(private _router: Router, private _activedRouter: ActivatedRoute, private _contactService: ContactsService) { }

  ngOnInit() {
    this._subscription = this._activedRouter
      .params
      .subscribe((params: any) => {
        this._contactId = _.toNumber(params["id"]);
        this._contactService
          .contactById(this._contactId)
          .subscribe((contact) => {
            if (contact) {
              this.selectContact = contact;
            }
          }, error => {
            console.log(error);
          });

      });
  }

  onEdit(): void {
    console.log("HERE", this.selectContact.id);
    this._router.navigate(['/contacts', this.selectContact.id, 'edit']);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }


  get selectContact(): ContactsModel {
    return this._selectContact;
  }

  set selectContact(value: ContactsModel) {
    this._selectContact = value;
  }

  onDelete() {
    let contact = new ContactsModel();
    contact.id = this._contactId;
    this._contactService.delete(contact)
    .subscribe((deletedContact) => {
      console.log(deletedContact);
      this._router.navigate(['/contacts']);
    }, error => {
      console.error(error);
      //TODO: handle delete error.
    })
  }
}
