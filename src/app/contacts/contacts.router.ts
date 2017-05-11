import { Routes, RouterModule } from "@angular/router";
import { ContactsShowComponent } from "app/contacts/contacts-show/contacts-show.component";
import { ContactBaseComponent } from "app/contacts/contact-base/contact-base.component";
import { ContactListComponent } from "app/contacts/contact-list/contact-list.component";
import { ContactsNewComponent } from "app/contacts/contacts-new/contacts-new.component";
import { ContactsEditComponent } from "app/contacts/contacts-edit/contacts-edit.component";
import { ContactsStartComponent } from "app/contacts/contacts-start/contacts-start.component";

const _CONTACT_ROUTES: Routes = [
    {
        path: "", component: ContactBaseComponent, children: [
            { path: "", component: ContactsStartComponent },
            { path: "new", component: ContactsEditComponent },
            { path: ":id", component: ContactsShowComponent },
            { path: ":id/edit", component: ContactsEditComponent }


        ]
    }
];
export const CONTACT_ROUTING = RouterModule.forChild(_CONTACT_ROUTES);