import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from "@angular/router";
import { ContactsService } from "app/contacts/contacts.service";
import { Subscription, Observable } from "rxjs/Rx";
import { ContactsModel } from "app/models/contacts.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BasicValidators } from "app/contacts/utils/basic-validators";

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _isNew: boolean = false;
  private _contactId: number;
  private _title: string = "";
  private _contact: ContactsModel;
  form: FormGroup;

  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _contactService: ContactsService
  ) {
    console.log("EDIT COMPONENT");
  }

  ngOnInit(): void {

    this._subscription = this._activatedRouter
      .params
      .subscribe((params: any) => {
        if (params.hasOwnProperty("id")) {
          this._isNew = false;
          this._contactId = _.toNumber(params["id"]);
          this._contactService
            .contactById(this._contactId)
            .subscribe(data => this._contact = data);
          this._title = "Edição de contatos";
        } else {
          this._isNew = true;
          this.contact = new ContactsModel();
          this._title = "Novo Contatos";
        }
        this._initForm();
      });
  }

  _initForm() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, BasicValidators.email]],
      phoneNumber: this._formBuilder.group({ phoneNumber: [] })
    });
  }

  get contact(): ContactsModel {
    return this._contact;
  }

  set contact(contact: ContactsModel) {
    this._contact = contact;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  get isNew() {
    return this._isNew;
  }

  onSave(): void {
    let contactOfPage = this.form.value;
    let resultOfServer: Observable<ContactsModel>;
    if (this.isNew) {
      resultOfServer = this._contactService.save(contactOfPage);
    } else {
      resultOfServer = this._contactService.update(contactOfPage);
    }
    this.form.reset();
    resultOfServer.subscribe(data => this.navigateBack(), error => alert('An error occurred'))
  }

  private navigateBack() {
    this._router.navigate(['/contacts']);
  }

  onCancel() {
    this.navigateBack();
  }

}
