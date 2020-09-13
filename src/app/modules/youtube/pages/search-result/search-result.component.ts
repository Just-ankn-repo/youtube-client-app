import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { IItem } from '../../models/api-response.model';

import { SearchService } from '../../services/search.service';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public cards: IItem[];
  public filter: {type: string, value: boolean | string};
  public searchKeyWord: string;

  constructor(private filters: FilterService,
              private search: SearchService,
              private activateRoute: ActivatedRoute) {
    this.searchKeyWord = activateRoute.snapshot.params.searchKeyWord;
  }

  public ngOnInit(): void {
    this.filter = this.filters.getFilters();
    this.cards = this.search.getSearchResult();
  }
}
