import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverComponent } from './hover/hover.component';
import {CssTricksRoutingModule} from './css-tricks-routing.module';
import {CssTricksComponent} from './css-tricks.component';
import {TricksComponent} from './tricks/tricks.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    CssTricksComponent,
    HoverComponent,
    TricksComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    CssTricksRoutingModule
  ]
})
export class CssTricksModule { }
