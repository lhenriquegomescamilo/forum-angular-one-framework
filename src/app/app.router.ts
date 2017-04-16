import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuardianService } from "app/auth/auth-guardian.service";
import { LoginComponent } from "app/login/login.component";
import { HomeComponent } from "app/home/home.component";

const _APP_ROUTES: Routes = [
    { path: "login", component: LoginComponent },
    { path: "", pathMatch: "full", component: HomeComponent, canActivate: [AuthGuardianService] },
    {
        path: "contacts",
        loadChildren: "app/contacts/contacts.module#ContactsModule",
        canActivate: [AuthGuardianService]
    },
      { path: '**', redirectTo: 'not-found' }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(_APP_ROUTES);

