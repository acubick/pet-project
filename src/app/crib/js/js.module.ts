import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';
import {JsComponent} from './js.component';


@NgModule({
  declarations: [
    JsComponent,
    RandomColorGeneratorComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
