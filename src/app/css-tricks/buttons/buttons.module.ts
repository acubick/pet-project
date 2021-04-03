import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CustomRadioButtonsComponent } from './custom-radio-buttons/custom-radio-buttons.component';


@NgModule({
  declarations: [
    RadioButtonComponent,
    CustomRadioButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
