import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { IItem } from '../../models/api-response.model';

import { SearchService } from '../../services/search.service';
import { FilterService } from '../../../shared/services/filter.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public cards: Observable<IItem[]>;
  public filter: { type: string, value: boolean | string };

  constructor(private filters: FilterService,
              private search: SearchService,
              private activateRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activateRoute.params.subscribe(data=> {
      this.cards = this.search.getSearchResult(data['searchKeyWord']);
    });
    this.filter = this.filters.getFilters();
  }
}
