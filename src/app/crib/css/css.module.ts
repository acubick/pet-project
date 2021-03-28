import {CssRoutingModule} from './css-routing.module';
import { NgModule } from '@angular/core';

import { TextComponent } from './text/text.component';
import { CommonModule } from '@angular/common';
import {HoverComponent} from './hover/hover.component';
import {CssComponent} from './css.component';
import { MasonryLayoutGridComponent } from './masonry-layout-grid/masonry-layout-grid.component';
import { PlayerUserCardsComponent } from './player-user-cards/player-user-cards.component';




@NgModule({
  declarations: [
    CssComponent,
    HoverComponent,
    TextComponent,
    MasonryLayoutGridComponent,
    PlayerUserCardsComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
