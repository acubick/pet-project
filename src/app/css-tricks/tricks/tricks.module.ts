import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TricksRoutingModule } from './tricks-routing.module';
import { ZigZagComponent } from './zig-zag/zig-zag.component';
import { SkewedHeaderComponent } from './skewed-header/skewed-header.component';


@NgModule({
  declarations: [
    ZigZagComponent,
    SkewedHeaderComponent
  ],
  imports: [
    CommonModule,
    TricksRoutingModule
  ]
})
export class TricksModule { }
