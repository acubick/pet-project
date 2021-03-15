import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TricksRoutingModule } from './tricks-routing.module';
import { ZigZagComponent } from './zig-zag/zig-zag.component';
import { SkewedHeaderComponent } from './skewed-header/skewed-header.component';
import { CurvedHeaderComponent } from './curved-header/curved-header.component';


@NgModule({
  declarations: [
    ZigZagComponent,
    SkewedHeaderComponent,
    CurvedHeaderComponent
  ],
  imports: [
    CommonModule,
    TricksRoutingModule
  ]
})
export class TricksModule { }
