import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './modules/core/guards/auth.guard';
import { FilterService } from './modules/shared/services/filter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  exports: [],
  providers: [
    AuthGuard,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
