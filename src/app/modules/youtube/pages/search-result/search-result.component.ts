import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreState} from "../../../redux/store.state";
import {Store} from "@ngrx/store";
import {Observable} from 'rxjs';
import {debounceTime, filter, mergeMap} from 'rxjs/operators';

import {IItem} from '../../models/api-response.model';
import {ICustomCard} from "../../models/custom-card.model";

import {SearchService} from '../../services/search.service';
import {FilterService} from '../../../shared/services/filter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public cards: Observable<IItem[]>;
  public customCards: Observable<ICustomCard[]>;
  public filter: { type: string, value: boolean | string };

  constructor(private filters: FilterService,
              private search: SearchService,
              private store: Store<StoreState>,
              private activateRoute: ActivatedRoute) {
    this.customCards = store.select('customCards')
    // this.cards = store.select('cards')
  }

  public ngOnInit(): void {
    this.cards = this.activateRoute.params
      .pipe(
        debounceTime(2000),
        filter(param => param.searchKeyWord.length >= 3),
        mergeMap(param => {
          return this.search.getSearchResult(param.searchKeyWord);
        })
      );
    this.filter = this.filters.getFilters();
  }
}
