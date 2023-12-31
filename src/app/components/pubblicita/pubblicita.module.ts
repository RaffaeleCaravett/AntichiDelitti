import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubblicitaRoutingModule } from './pubblicita-routing.module';
import { PubblicitaComponent } from './pubblicita.component';


@NgModule({
  declarations: [
    PubblicitaComponent
  ],
  imports: [
    CommonModule,
    PubblicitaRoutingModule
  ]
})
export class PubblicitaModule { }
