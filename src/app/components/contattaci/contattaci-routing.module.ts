import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattaciComponent } from './contattaci.component';

const routes: Routes = [{ path: '', component: ContattaciComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContattaciRoutingModule { }
