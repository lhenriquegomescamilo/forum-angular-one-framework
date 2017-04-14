import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsNewComponent } from './contacts-new/contacts-new.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsService } from "app/contacts/contacts.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactsNewComponent, ContactsEditComponent, ContactsShowComponent],
  providers: [ContactsService]
})
export class ContactsModule { }
