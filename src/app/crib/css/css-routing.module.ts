import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CssComponent} from './css.component';
import {HoverComponent} from './hover/hover.component';
import {TextComponent} from './text/text.component';
import {NotFoundComponent} from '../../not-found/not-found.component';








const routes: Routes = [
  {
    path: '', component: CssComponent, children: [

      {
        path: 'hover', component: HoverComponent
      },
      {
        path: 'text', component: TextComponent
      },
      {path: '', redirectTo: 'hover', pathMatch: 'full'},
      { path: '**', component:  NotFoundComponent}

    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CssRoutingModule { }

