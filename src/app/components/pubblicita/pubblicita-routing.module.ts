import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubblicitaComponent } from './pubblicita.component';

const routes: Routes = [{ path: '', component: PubblicitaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubblicitaRoutingModule { }
