import {Component, OnInit, Input, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { IItem } from '../../models/api-response.model';
import mockResponse from '../../../../../mock-response';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() public cards: IItem[];
  @Input() public filter: {type: string, value: boolean | string};
  public searchKeyWord: string

  constructor(private activateRoute: ActivatedRoute) {
    this.searchKeyWord = activateRoute.snapshot.params['searchKeyWord']
  }

  public ngOnInit(): void {
    this.cards = mockResponse.items;
  }
}
