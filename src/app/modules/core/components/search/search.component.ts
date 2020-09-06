import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IApiResponse, IItem } from '../../../youtube/models/api-response.model';
import mockResponse from '../../../../../mock-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchKeyWord: string

  constructor() { }

  public ngOnInit(): void {
  }

  public searchKeyword(keyword: string): void {
    this.searchKeyWord = keyword;
  }
}
