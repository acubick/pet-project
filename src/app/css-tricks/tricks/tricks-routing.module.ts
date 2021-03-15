import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from '../../not-found/not-found.component';
import {TricksComponent} from './tricks.component';
import {ZigZagComponent} from './zig-zag/zig-zag.component';
import {SkewedHeaderComponent} from './skewed-header/skewed-header.component';
import {CurvedHeaderComponent} from './curved-header/curved-header.component';


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
