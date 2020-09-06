import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { SortByKeywordPipe } from './pipes/sort-by-keyword.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { CardHighlightDirective } from './directives/card-highlight.directive';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { SearchResultsComponent } from './components/search-result/search-result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import {YoutubeRoutingModule} from "./youtube-routing.module";

@NgModule({
  declarations: [
    SearchResultsComponent,
    ResultCardComponent,
    CardDetailsComponent,
    CardHighlightDirective,
    SortByDatePipe,
    SortByKeywordPipe,
    SortByViewsPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    YoutubeRoutingModule
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class YoutubeModule { }
