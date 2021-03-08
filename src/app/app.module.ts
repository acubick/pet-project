import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CribModule} from './crib/crib.module';
import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';
import {CssTricksModule} from './css-tricks/css-tricks.module';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterMainComponent } from './footer-main/footer-main.component';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderMainComponent,
    FooterMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CribModule,
    HomeModule,
    CssTricksModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
