import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuardianService } from "app/auth/auth-guardian.service";

const _APP_ROUTES : Routes = [
    {
        path : "contacts",
        loadChildren: "app/contacts/contacts.module#ContactsModule",
        canActivate: AuthGuardianService
    }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(_APP_ROUTES);
