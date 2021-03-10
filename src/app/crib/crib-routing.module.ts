import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CribComponent} from './crib.component';
import {MediaComponent} from './media/media.component';
import {AnimationComponent} from './animation/animation.component';
import {JsComponent} from './js/js.component';
import {CssComponent} from './css/css.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {HtmlComponent} from './html/html.component';
import {HoverComponent} from './css/hover/hover.component';
import {TextComponent} from './css/text/text.component';
import {MenuComponent} from './menu/menu.component';
import {DrawerMenuComponent} from './menu/drawer-menu/drawer-menu.component';



const routes: Routes = [
  {path: '', component: CribComponent, children: [
      {path: 'html', component: HtmlComponent},
      {path: 'css', loadChildren: () => import(`./css/css.module`).then(m => m.CssModule) },
      {path: 'js', component: JsComponent},
      {path: 'media', component: MediaComponent},
      {path: 'animation', component: AnimationComponent},
      {path: 'menu', component: MenuComponent, children: [
          {path: '', redirectTo: 'drawer-menu', pathMatch: 'full'},
          {path: 'drawer-menu', component: DrawerMenuComponent}
        ]},
      {path: '', redirectTo: 'html', pathMatch: 'full'},
    ]},
  {path: '**', component: NotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CribRoutingModule { }
