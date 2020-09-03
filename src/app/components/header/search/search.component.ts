import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IApiResponse, IItem } from '../../../models/api-response.model';
import mockResponse from '../../../../mock-response';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() public searchResult: EventEmitter<IItem[]> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public search(): void {
    const response: IApiResponse = mockResponse;
    this.searchResult.emit(response.items);
  }
}
