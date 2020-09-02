import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { CardHighlightDirective } from './directives/card-highlight.directive';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { SortByKeywordPipe } from './pipes/sort-by-keyword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    ResultCardComponent,
    CardDetailsComponent,
    SearchComponent,
    FilterComponent,
    LoginComponent,
    CardHighlightDirective,
    SortByDatePipe,
    SortByViewsPipe,
    SortByKeywordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
