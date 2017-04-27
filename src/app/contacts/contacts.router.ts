import { Routes, RouterModule } from "@angular/router";
import { ContactsShowComponent } from "app/contacts/contacts-show/contacts-show.component";
import { ContactBaseComponent } from "app/contacts/contact-base/contact-base.component";
import { ContactListComponent } from "app/contacts/contact-list/contact-list.component";
import { ContactsNewComponent } from "app/contacts/contacts-new/contacts-new.component";

const _CONTACT_ROUTES: Routes = [
    {
        path: "", component: ContactBaseComponent, children: [
            { path: ":id", component: ContactsShowComponent },
            { path: "new", component: ContactsNewComponent }
        ]
    }
];
export const CONTACT_ROUTING = RouterModule.forChild(_CONTACT_ROUTES);