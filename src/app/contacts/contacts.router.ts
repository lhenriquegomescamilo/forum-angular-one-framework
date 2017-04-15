import { Routes, RouterModule } from "@angular/router";
import { ContactsShowComponent } from "app/contacts/contacts-show/contacts-show.component";

const _CONTACT_ROUTES: Routes = [
    {
        path: "", component: ContactsShowComponent
    }
];
export const CONTACT_ROUTING = RouterModule.forChild(_CONTACT_ROUTES);