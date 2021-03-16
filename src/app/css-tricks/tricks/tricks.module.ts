import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TricksRoutingModule } from './tricks-routing.module';
import { ZigZagComponent } from './zig-zag/zig-zag.component';
import { SkewedHeaderComponent } from './skewed-header/skewed-header.component';
import { CurvedHeaderComponent } from './curved-header/curved-header.component';
import { SkewedBackgroundFirstComponent } from './skewed-background-first/skewed-background-first.component';
import { SkewedBackgroundBorderComponent } from './skewed-background-border/skewed-background-border.component';


@NgModule({
  declarations: [
    ZigZagComponent,
    SkewedHeaderComponent,
    CurvedHeaderComponent,
    SkewedBackgroundFirstComponent,
    SkewedBackgroundBorderComponent
  ],
  imports: [
    CommonModule,
    TricksRoutingModule
  ]
})
export class TricksModule { }
