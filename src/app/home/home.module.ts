import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "app/home/home.component";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, MenuComponent],
  exports:[HomeComponent, MenuComponent]
})
export class HomeModule { }
