import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvvertenzaComponent } from './avvertenza.component';

const routes: Routes = [{ path: '', component: AvvertenzaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvvertenzaRoutingModule { }
