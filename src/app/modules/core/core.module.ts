import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { Page404Component } from './components/page404/page404.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import {RouterModule} from "@angular/router";

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
  providers: []
})
export class CoreModule { }
