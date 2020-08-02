import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-result/search-result.component';
import { ResultCardComponent } from './components/search-result/result-card/result-card.component';
import { CardDetailsComponent } from './components/search-result/result-card/card-details/card-details.component';
import { SearchComponent } from './components/header/search/search.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { LoginComponent } from './components/header/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    ResultCardComponent,
    CardDetailsComponent,
    SearchComponent,
    FilterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
