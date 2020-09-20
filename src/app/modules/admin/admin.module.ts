import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {CreateCardFormComponent} from './components/create-card-form/create-card-form.component';
import {UpdateCardFormComponent} from './components/update-card-form/update-card-form.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminPageComponent,
    CreateCardFormComponent,
    UpdateCardFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminModule {
}
