import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtqwRoutingModule } from './etqw-routing.module';
import {EtqwSmurfCheckerComponent} from './etqw-smurf-checker/etqw-smurf-checker.component';


@NgModule({
  declarations: [
    EtqwSmurfCheckerComponent
  ],
  imports: [
    CommonModule,
    EtqwRoutingModule
  ]
})
export class EtqwModule { }
