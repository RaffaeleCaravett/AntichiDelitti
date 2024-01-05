import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouteGuard } from './core/route.guard';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ErrorsComponent } from './shared/errors/errors.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AuthTokenInterceptor } from './core/auth.token.interceptor';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SearchComponent } from './shared/search/search.component';
import { HandleOperationOnItemsComponent } from './shared/handle-operation-on-items/handle-operation-on-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewArticoloComponent } from './shared/view-articolo/view-articolo.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ViewBozzaComponent } from './shared/view-bozza/view-bozza.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorsComponent,
    NotfoundComponent,
    SearchComponent,
    HandleOperationOnItemsComponent,
    ViewArticoloComponent,
    ViewBozzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })

  ],
  exports:[ErrorsComponent],
  providers: [
    RouteGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true,
  },
  provideAnimations(),
  provideToastr(), ],
  bootstrap: [AppComponent]
})
export class AppModule { }
