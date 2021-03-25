import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverRoutingModule } from './hover-routing.module';
import { ImageHoverOverlayComponent } from './image-hover-overlay/image-hover-overlay.component';
import { CardHoverEffectsComponent } from './card-hover-effects/card-hover-effects.component';


@NgModule({
  declarations: [
    ImageHoverOverlayComponent,
    CardHoverEffectsComponent],
  imports: [
    CommonModule,
    HoverRoutingModule
  ]
})
export class HoverModule { }
