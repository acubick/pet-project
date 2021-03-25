import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TricksRoutingModule } from './tricks-routing.module';
import { ZigZagComponent } from './zig-zag/zig-zag.component';
import { SkewedHeaderComponent } from './skewed-header/skewed-header.component';
import { CurvedHeaderComponent } from './curved-header/curved-header.component';
import { SkewedBackgroundFirstComponent } from './skewed-background-first/skewed-background-first.component';
import { SkewedBackgroundBorderComponent } from './skewed-background-border/skewed-background-border.component';
import { InsideSilhouetteComponent } from './inside-silhouette/inside-silhouette.component';
import { CurveBackgroundSvgComponent } from './curve-background-svg/curve-background-svg.component';
import { DifferentCssShapesComponent } from './different-css-shapes/different-css-shapes.component';
import { GradientBorderCardsComponent } from './gradient-border-cards/gradient-border-cards.component';




@NgModule({
  declarations: [
    ZigZagComponent,
    SkewedHeaderComponent,
    CurvedHeaderComponent,
    SkewedBackgroundFirstComponent,
    SkewedBackgroundBorderComponent,
    InsideSilhouetteComponent,
    CurveBackgroundSvgComponent,
    DifferentCssShapesComponent,
    GradientBorderCardsComponent
    InsideSilhouetteComponent

  ],
  imports: [
    CommonModule,
    TricksRoutingModule
  ]
})
export class TricksModule { }
