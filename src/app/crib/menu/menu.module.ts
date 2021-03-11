import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import {MenuComponent} from './menu.component';
import {DrawerMenuComponent} from './drawer-menu/drawer-menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    DrawerMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
