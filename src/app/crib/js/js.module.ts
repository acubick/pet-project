import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';
import {JsComponent} from './js.component';
import { NeumorphismAnalogClockComponent } from './neumorphism-analog-clock/neumorphism-analog-clock.component';


@NgModule({
  declarations: [
    JsComponent,
    RandomColorGeneratorComponent,
    NeumorphismAnalogClockComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
