import { Component, OnInit } from '@angular/core';
import { ContactsModule } from "app/contacts/contacts.module";
import { ContactsModel } from "app/models/contacts.model";
import { ContactsService } from 'app/contacts/contacts.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private _contacts: ContactsModel[] = []

  constructor(private _contactService: ContactsService) { }

  ngOnInit() {
    this._contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    }, error => {
      //TODO: Handle error
    })
  }

  get contacts(): ContactsModel[]{
    return this._contacts;
  }

  set contacts(value: ContactsModel[]) {
    this._contacts = value;
  }
}
