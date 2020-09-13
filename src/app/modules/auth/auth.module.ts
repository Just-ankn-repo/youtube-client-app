import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AuthRoutingModule
  ],
  exports: [
    AuthPageComponent
  ]
})
export class AuthModule { }
