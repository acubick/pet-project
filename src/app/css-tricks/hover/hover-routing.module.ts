import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HoverComponent} from './hover.component';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {ImageHoverOverlayComponent} from './image-hover-overlay/image-hover-overlay.component';
import {CardHoverEffectsComponent} from './card-hover-effects/card-hover-effects.component';
import {FlipHardHoverComponent} from './flip-hard-hover/flip-hard-hover.component';
import {GradientGlassmorphismCardComponent} from './gradient-glassmorphism-card/gradient-glassmorphism-card.component';
import {SocialMediaIconComponent} from './social-media-icon/social-media-icon.component';
import {SkewedBorderComponent} from './skewed-border/skewed-border.component';
import {UserCardInteractionsComponent} from './user-card-interactions/user-card-interactions.component';


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
        path: 'gradient-glassmorphism-card', component: GradientGlassmorphismCardComponent
      },
      {
        path: 'social-media-icon', component: SocialMediaIconComponent
      },
      {
        path: 'skewed-border', component: SkewedBorderComponent
      },
      {
        path: 'user-card-interactions', component: UserCardInteractionsComponent
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
