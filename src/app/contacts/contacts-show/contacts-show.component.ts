import { Component, OnInit } from '@angular/core';
import { ContactsModel } from "app/models/contacts.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.css']
})
export class ContactsShowComponent implements OnInit {

  private _selectContact: ContactsModel;
  constructor(private _router: Router, private _activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this._activedRouter
      .params
      .subscribe((params: any) => {
        console.log(params["id"]);
      });
  }

  get selectContact(): ContactsModel {
    return this._selectContact;
  }
}
