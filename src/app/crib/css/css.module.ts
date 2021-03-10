import {CssRoutingModule} from './css-routing.module';
import { NgModule } from '@angular/core';

import { TextComponent } from './text/text.component';
import { CommonModule } from '@angular/common';
import {HoverComponent} from './hover/hover.component';
import {CssComponent} from './css.component';




@NgModule({
  declarations: [
    CssComponent,
    HoverComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
