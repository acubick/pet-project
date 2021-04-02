import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { EtqwComponent } from './etqw/etqw.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    HomeComponent,
    EtqwComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
