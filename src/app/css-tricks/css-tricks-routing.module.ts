import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from '../not-found/not-found.component';
import {CssTricksComponent} from './css-tricks.component';
import {TextJumpsComponent} from './text-jumps/text-jumps.component';
import {HoverComponent} from './hover/hover.component';



const routes: Routes = [
  {path: 'css-tricks', component: CssTricksComponent, children: [
      {path: '', redirectTo: 'hover', pathMatch: 'full'},
      {path: 'hover', component: HoverComponent},
      {path: 'text-jumps', component: TextJumpsComponent}
    ]},
  {path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CssTricksRoutingModule { }
