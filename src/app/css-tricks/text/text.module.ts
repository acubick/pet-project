import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextRoutingModule } from './text-routing.module';
import {TextComponent} from './text.component';
import { TextAroundImageComponent } from './text-around-image/text-around-image.component';


@NgModule({
  declarations: [
    TextComponent,
    TextAroundImageComponent
  ],
  imports: [
    CommonModule,
    TextRoutingModule
  ]
})
export class TextModule { }
