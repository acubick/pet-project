import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  { path: 'home',  loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)  },
  { path: 'css-tricks',  loadChildren: () => import(`./css-tricks/css-tricks.module`).then(m => m.CssTricksModule)  },
  {path: 'crib',  loadChildren: () => import(`./crib/crib.module`).then(m => m.CribModule)  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
