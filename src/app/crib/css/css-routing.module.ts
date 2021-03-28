import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CssComponent} from './css.component';
import {HoverComponent} from './hover/hover.component';
import {TextComponent} from './text/text.component';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {MasonryLayoutGridComponent} from './masonry-layout-grid/masonry-layout-grid.component';
import {PlayerUserCardsComponent} from './player-user-cards/player-user-cards.component';








const routes: Routes = [
  {
    path: '', component: CssComponent, children: [

      {
        path: 'hover', component: HoverComponent
      },
      {
        path: 'text', component: TextComponent
      },
      {
        path: 'masonry-layout-grid', component: MasonryLayoutGridComponent
      },
      {
        path: 'player-user-cards', component:  PlayerUserCardsComponent
      },
      {path: '', redirectTo: 'masonry-layout-grid', pathMatch: 'full'},
      { path: '**', component:  NotFoundComponent}

    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CssRoutingModule { }

