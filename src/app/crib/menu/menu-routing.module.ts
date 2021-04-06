import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {MenuComponent} from './menu.component';
import {DrawerMenuComponent} from './drawer-menu/drawer-menu.component';
import {ResponsiveNavbarComponent} from './responsive-navbar/responsive-navbar.component';


const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      {
        path: 'drawer-menu', component: DrawerMenuComponent,
      },
      {
        path: 'responsive-navbar', component: ResponsiveNavbarComponent,
      },

      {
        path: '', redirectTo: 'drawer-menu', pathMatch: 'full'
      },

      { path: '**', component: NotFoundComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
