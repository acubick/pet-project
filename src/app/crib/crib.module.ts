import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CribRoutingModule} from './crib-routing.module';

import { CribComponent } from './crib.component';
import { AnimationComponent } from './animation/animation.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { MediaComponent } from './media/media.component';
import { HtmlComponent } from './html/html.component';



@NgModule({
  declarations: [
    CribComponent,
    AnimationComponent,
    CssComponent,
    JsComponent,
    MediaComponent,
    HtmlComponent
  ],
  imports: [
    CommonModule,
    CribRoutingModule
  ]
})
export class CribModule { }
