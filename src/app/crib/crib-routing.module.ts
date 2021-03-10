import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CribComponent} from './crib.component';
import {MediaComponent} from './media/media.component';
import {AnimationComponent} from './animation/animation.component';
import {JsComponent} from './js/js.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {HtmlComponent} from './html/html.component';




const routes: Routes = [
  {path: '', component: CribComponent, children: [
      {path: 'html', component: HtmlComponent},
      {path: 'css', loadChildren: () => import(`./css/css.module`).then(m => m.CssModule) },
      {path: 'js', component: JsComponent},
      {path: 'media', component: MediaComponent},
      {path: 'animation', component: AnimationComponent},
      {path: 'menu', loadChildren: () => import(`./menu/menu.module`).then(m => m.MenuModule) },
      {path: '', redirectTo: 'html', pathMatch: 'full'},
    ]},
  {path: '**', component: NotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CribRoutingModule { }
