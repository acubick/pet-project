import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { RadioButtonComponent } from './radio-button/radio-button.component';


@NgModule({
  declarations: [
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
