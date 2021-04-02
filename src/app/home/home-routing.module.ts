import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CribComponent} from '../crib/crib.component';
import {HtmlComponent} from '../crib/html/html.component';
import {MediaComponent} from '../crib/media/media.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {HomeComponent} from './home.component';
import {EtqwSmurfCheckerComponent} from './etqw/etqw-smurf-checker/etqw-smurf-checker.component';



const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      // {path: '', component: HomeComponent},
      {path: 'etqw', loadChildren: () => import(`./etqw/etqw.module`).then(m => m.EtqwModule) },
      // {path: 'media', component: MediaComponent},
      {path: '', redirectTo: 'etqw', pathMatch: 'full'},
    ]},
  {path: '**', component: NotFoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
