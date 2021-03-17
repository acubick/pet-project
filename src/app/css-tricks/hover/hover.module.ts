import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverRoutingModule } from './hover-routing.module';
import { TestFirstComponent } from './test-first/test-first.component';
import { TestSecondComponent } from './test-second/test-second.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { ImageHoverOverlayComponent } from './image-hover-overlay/image-hover-overlay.component';


@NgModule({
  declarations: [
    TestFirstComponent,
    TestSecondComponent,
    TestThreeComponent,
    ImageHoverOverlayComponent],
  imports: [
    CommonModule,
    HoverRoutingModule
  ]
})
export class HoverModule { }
