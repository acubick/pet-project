import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';
import {JsComponent} from './js.component';
import { NeumorphismAnalogClockComponent } from './neumorphism-analog-clock/neumorphism-analog-clock.component';
import { HeaderBackgroundFadeComponent } from './header-background-fade/header-background-fade.component';
import { GlassShutterEffectsComponent } from './glass-shutter-effects/glass-shutter-effects.component';
import { VideoGalleryPlayComponent } from './video-gallery-play/video-gallery-play.component';


@NgModule({
  declarations: [
    JsComponent,
    RandomColorGeneratorComponent,
    NeumorphismAnalogClockComponent,
    HeaderBackgroundFadeComponent,
    GlassShutterEffectsComponent,
    VideoGalleryPlayComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
