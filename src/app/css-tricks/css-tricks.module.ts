import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverComponent } from './hover/hover.component';
import {CssTricksRoutingModule} from './css-tricks-routing.module';
import { TextJumpsComponent } from './text-jumps/text-jumps.component';
import {CssTricksComponent} from './css-tricks.component';



@NgModule({
  declarations: [
    CssTricksComponent,
    HoverComponent,
    TextJumpsComponent
  ],
  imports: [
    CommonModule,
    CssTricksRoutingModule
  ]
})
export class CssTricksModule { }
