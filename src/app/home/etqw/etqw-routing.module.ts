import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimationComponent} from '../../crib/animation/animation.component';
import {AnimatedSmokeTextComponent} from '../../crib/animation/animated-smoke-text/animated-smoke-text.component';
import {TextAnimationEffectsDComponent} from '../../crib/animation/text-animation-effects-d/text-animation-effects-d.component';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {EtqwComponent} from './etqw.component';
import {EtqwSmurfCheckerComponent} from './etqw-smurf-checker/etqw-smurf-checker.component';


const routes: Routes = [

  {
    path: '', component: EtqwComponent, children: [
      {
        path: 'etqw-smurf-checker', component: EtqwSmurfCheckerComponent,
      },
      // {
      //   path: 'text-animation-effects-d', component: TextAnimationEffectsDComponent,
      // },
      {
        path: '', redirectTo: 'etqw-smurf-checker', pathMatch: 'full'
      },

      { path: '**', component: NotFoundComponent  }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtqwRoutingModule { }
