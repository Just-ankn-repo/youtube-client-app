import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IApiResponse, IItem } from '../../../models/api-response.model';
import mockResponse from '../../../../mock-response';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchResult = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    const response: IApiResponse = mockResponse;
    this.searchResult.emit(response.items);
  }
}
