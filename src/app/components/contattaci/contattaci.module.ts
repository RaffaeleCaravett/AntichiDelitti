import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattaciRoutingModule } from './contattaci-routing.module';
import { ContattaciComponent } from './contattaci.component';


@NgModule({
  declarations: [
    ContattaciComponent
  ],
  imports: [
    CommonModule,
    ContattaciRoutingModule
  ]
})
export class ContattaciModule { }
