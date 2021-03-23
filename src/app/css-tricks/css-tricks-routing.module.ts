import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from '../not-found/not-found.component';
import {CssTricksComponent} from './css-tricks.component';
import {TextComponent} from './text/text.component';




const routes: Routes = [

  {
    path: '', component: CssTricksComponent, children: [
      {
        path: 'text-jumps', component: TextComponent,
      },
      { path: 'hover', loadChildren: () => import(`./hover/hover.module`).then(m => m.HoverModule) },
      { path: 'tricks', loadChildren: () => import(`./tricks/tricks.module`).then(m => m.TricksModule) },
      { path: 'buttons', loadChildren: () => import(`./buttons/buttons.module`).then(m => m.ButtonsModule) },
      { path: 'text', loadChildren: () => import(`./text/text.module`).then(m => m.TextModule) },
      {
        path: '', redirectTo: 'text-jumps', pathMatch: 'full'
      },

      { path: '**', component: NotFoundComponent  }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CssTricksRoutingModule { }
