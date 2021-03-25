import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from '../../not-found/not-found.component';
import {TricksComponent} from './tricks.component';
import {ZigZagComponent} from './zig-zag/zig-zag.component';
import {SkewedHeaderComponent} from './skewed-header/skewed-header.component';
import {CurvedHeaderComponent} from './curved-header/curved-header.component';
import {SkewedBackgroundFirstComponent} from './skewed-background-first/skewed-background-first.component';
import {SkewedBackgroundSecondaryComponent} from './skewed-background-secondary/skewed-background-secondary.component';
import {SkewedBackgroundBorderComponent} from './skewed-background-border/skewed-background-border.component';
import {InsideSilhouetteComponent} from './inside-silhouette/inside-silhouette.component';
import {CurveBackgroundSvgComponent} from './curve-background-svg/curve-background-svg.component';
import {DifferentCssShapesComponent} from './different-css-shapes/different-css-shapes.component';
import {GradientBorderCardsComponent} from './gradient-border-cards/gradient-border-cards.component';


const routes: Routes = [
  {
    path: '', component: TricksComponent, children: [

      {
        path: 'zig-zag', component: ZigZagComponent
      },
      {
        path: 'curved-header', component: CurvedHeaderComponent
      },
      {
        path: 'skewed-header', component: SkewedHeaderComponent
      },
      {
        path: 'skewed-background-first', component: SkewedBackgroundFirstComponent
      },
      {
        path: 'skewed-background-secondary', component: SkewedBackgroundSecondaryComponent
      },
      {
        path: 'skewed-background-border', component: SkewedBackgroundBorderComponent
      },
      {
        path: 'inside-silhouette', component: InsideSilhouetteComponent
      },
      {
        path: 'curve-background-svg', component: CurveBackgroundSvgComponent
      },
      {
        path: 'different-css-shapes', component: DifferentCssShapesComponent
      },
      {
        path: 'gradient-border-cards', component: GradientBorderCardsComponent
      },
      {
        path: '', redirectTo: 'zig-zag', pathMatch: 'full'
      },
      { path: '**', component:  NotFoundComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TricksRoutingModule { }
