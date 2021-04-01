import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimatedSmokeTextComponent } from './animated-smoke-text/animated-smoke-text.component';
import {AnimationComponent} from './animation.component';
import { TextAnimationEffectsDComponent } from './text-animation-effects-d/text-animation-effects-d.component';


@NgModule({
  declarations: [
    AnimationComponent,
    AnimatedSmokeTextComponent,
    TextAnimationEffectsDComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule
  ]
})
export class AnimationModule { }
