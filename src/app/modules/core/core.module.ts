import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';

import { Page404Component } from './pages/page404/page404.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    HeaderComponent,
    FilterComponent,
    LoginComponent,
    SearchComponent,
    Page404Component,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    Page404Component,
    WelcomePageComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
