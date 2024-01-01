import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './core/route.guard';

const routes: Routes = [
  { path:'' , redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../app/components/home/home.module').then(m => m.HomeModule) },
  { path: 'disclaimer', loadChildren: () => import('../app/components/disclaimer/disclaimer.module').then(m => m.DisclaimerModule) },
  { path: 'avvertenza', loadChildren: () => import('../app/components/avvertenza/avvertenza.module').then(m => m.AvvertenzaModule) },
  { path: 'pubblicita', loadChildren: () => import('../app/components/pubblicita/pubblicita.module').then(m => m.PubblicitaModule) },
  { path: 'contattaci', loadChildren: () => import('../app/components/contattaci/contattaci.module').then(m => m.ContattaciModule) },
  { path: 'login', loadChildren: () => import('../app/shared/login/login.module').then(m => m.LoginModule) },
  { path: 'office', loadChildren: () => import('./components/office/office/office.module').then(m => m.OfficeModule), canActivate: [RouteGuard] },
  { path:'**' , redirectTo:'/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
