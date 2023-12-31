import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfficeComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    ReactiveFormsModule
  ]
})
export class OfficeModule { }
