import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from '../../not-found/not-found.component';
import {AnimatedSmokeTextComponent} from './animated-smoke-text/animated-smoke-text.component';
import {AnimationComponent} from './animation.component';
import {TextAnimationEffectsDComponent} from './text-animation-effects-d/text-animation-effects-d.component';


const routes: Routes = [
  {
    path: '', component: AnimationComponent, children: [
      {
        path: 'animated-smoke-text', component: AnimatedSmokeTextComponent,
      },
      {
        path: 'text-animation-effects-d', component: TextAnimationEffectsDComponent,
      },
      {
        path: '', redirectTo: 'animated-smoke-text', pathMatch: 'full'
      },

      { path: '**', component: NotFoundComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationRoutingModule { }
