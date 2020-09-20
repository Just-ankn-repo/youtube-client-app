import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';

import {YoutubeRoutingModule} from './youtube-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {SortByViewsPipe} from './pipes/sort-by-views.pipe';
import {SortByKeywordPipe} from './pipes/sort-by-keyword.pipe';
import {SortByDatePipe} from './pipes/sort-by-date.pipe';
import {CardHighlightDirective} from './directives/card-highlight.directive';

import {ResultCardComponent} from './components/result-card/result-card.component';
import {CardDetailsComponent} from './pages/card-details/card-details.component';
import {SearchResultsComponent} from './pages/search-result/search-result.component';
import {ResultCustomCardComponent} from './components/result-custom-card/result-custom-card.component';

import {SearchService} from './services/search.service';
import {HumanReadableDateDirective} from './directives/human-readable-date.directive';

@NgModule({
  declarations: [
    SearchResultsComponent,
    ResultCardComponent,
    CardDetailsComponent,
    CardHighlightDirective,
    HumanReadableDateDirective,
    SortByDatePipe,
    SortByKeywordPipe,
    SortByViewsPipe,
    ResultCustomCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    YoutubeRoutingModule
  ],
  exports: [
    SearchResultsComponent,
    CardDetailsComponent
  ],
  providers: [
    SearchService
  ]
})
export class YoutubeModule {
}
