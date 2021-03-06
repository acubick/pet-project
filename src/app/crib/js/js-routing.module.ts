import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from '../../not-found/not-found.component';
import {JsComponent} from './js.component';
import {RandomColorGeneratorComponent} from './random-color-generator/random-color-generator.component';
import {NeumorphismAnalogClockComponent} from './neumorphism-analog-clock/neumorphism-analog-clock.component';
import {HeaderBackgroundFadeComponent} from './header-background-fade/header-background-fade.component';
import {GlassShutterEffectsComponent} from './glass-shutter-effects/glass-shutter-effects.component';
import {VideoGalleryPlayComponent} from './video-gallery-play/video-gallery-play.component';


const routes: Routes = [
  {
    path: '', component: JsComponent, children: [
      {
        path: 'random-color-generator', component: RandomColorGeneratorComponent,
      },
      {
        path: 'neumorphism-analog-clock', component: NeumorphismAnalogClockComponent,
      },

      {
        path: 'header-background-fade', component: HeaderBackgroundFadeComponent
      },
      {
        path: 'glass-shutter-effects', component: GlassShutterEffectsComponent
      },
      {
        path: 'video-gallery-play', component: VideoGalleryPlayComponent
      },

      {
        path: '', redirectTo: 'random-color-generator', pathMatch: 'full'
      },

      { path: '**', component: NotFoundComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
