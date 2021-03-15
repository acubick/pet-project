import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TricksRoutingModule } from './tricks-routing.module';
import { ZigZagComponent } from './zig-zag/zig-zag.component';


@NgModule({
  declarations: [
    ZigZagComponent
  ],
  imports: [
    CommonModule,
    TricksRoutingModule
  ]
})
export class TricksModule { }
