import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HoverComponent} from './hover.component';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {ImageHoverOverlayComponent} from './image-hover-overlay/image-hover-overlay.component';
import {CardHoverEffectsComponent} from './card-hover-effects/card-hover-effects.component';
import {FlipHardHoverComponent} from './flip-hard-hover/flip-hard-hover.component';


const routes: Routes = [
  {
    path: '', component: HoverComponent, children: [
      {
        path: 'card-hover-effects', component: CardHoverEffectsComponent
      },
      {
        path: 'image-hover-overlay', component: ImageHoverOverlayComponent
      },
      {
        path: 'flip-hard-hover', component: FlipHardHoverComponent
      },
      {
        path: '', redirectTo: 'image-hover-overlay', pathMatch: 'full'
      },
      {path: '**', component: NotFoundComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoverRoutingModule {
}
