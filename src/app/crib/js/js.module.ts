import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';
import {JsComponent} from './js.component';
import { NeumorphismAnalogClockComponent } from './neumorphism-analog-clock/neumorphism-analog-clock.component';
import { HeaderBackgroundFadeComponent } from './header-background-fade/header-background-fade.component';


@NgModule({
  declarations: [
    JsComponent,
    RandomColorGeneratorComponent,
    NeumorphismAnalogClockComponent,
    HeaderBackgroundFadeComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
