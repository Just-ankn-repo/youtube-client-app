import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './modules/core/core.module';
import {SharedModule} from './modules/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './modules/core/guards/auth.guard';
import {FilterService} from './modules/shared/services/filter.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './modules/youtube/services/http-interceptor.service';
import {AuthService} from './modules/core/services/auth.service';
import {AdminGuard} from "./modules/core/guards/admin.guard";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./modules/redux/reducers/card.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({
      customCards: reducer
    }),
    StoreDevtoolsModule.instrument({})
  ],
  exports: [],
  providers: [
    AuthGuard,
    AdminGuard,
    FilterService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
