import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsNewComponent } from './contacts-new/contacts-new.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsService } from "app/contacts/contacts.service";
import { CONTACT_ROUTING } from "app/contacts/contacts.router";
import { ContactBaseComponent } from './contact-base/contact-base.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    CONTACT_ROUTING
  ],
  declarations: [
    ContactsNewComponent,
    ContactsEditComponent,
    ContactsShowComponent,
    ContactBaseComponent,
    ContactListComponent
  ],
  providers: [ContactsService]
})
export class ContactsModule { }
