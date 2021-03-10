import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CribRoutingModule} from './crib-routing.module';

import { CribComponent } from './crib.component';
import { AnimationComponent } from './animation/animation.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { MediaComponent } from './media/media.component';
import { HtmlComponent } from './html/html.component';
import { MenuComponent } from './menu/menu.component';
import { DrawerMenuComponent } from './menu/drawer-menu/drawer-menu.component';



@NgModule({
  declarations: [
    CribComponent,
    AnimationComponent,
    JsComponent,
    MediaComponent,
    HtmlComponent,
    MenuComponent,
    DrawerMenuComponent
  ],
  imports: [
    CommonModule,
    CribRoutingModule
  ]
})
export class CribModule { }
