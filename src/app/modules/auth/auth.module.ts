import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AuthRoutingModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthModule { }
