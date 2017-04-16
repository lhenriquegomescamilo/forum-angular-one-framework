import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "app/home/home.component";
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, MenuComponent],
  exports:[HomeComponent, MenuComponent]
})
export class HomeModule { }
