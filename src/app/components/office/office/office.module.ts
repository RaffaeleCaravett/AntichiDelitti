import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    OfficeComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class OfficeModule { }
