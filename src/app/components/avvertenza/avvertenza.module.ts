import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvvertenzaRoutingModule } from './avvertenza-routing.module';
import { AvvertenzaComponent } from './avvertenza.component';


@NgModule({
  declarations: [
    AvvertenzaComponent
  ],
  imports: [
    CommonModule,
    AvvertenzaRoutingModule
  ]
})
export class AvvertenzaModule { }
