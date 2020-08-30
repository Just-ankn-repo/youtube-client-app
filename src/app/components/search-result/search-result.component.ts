import { Component, OnInit } from '@angular/core';
import { IApiResponse, IItem } from "../../models/api-response.model";
import mockResponse from '../../../mock-response';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {
  cards: IItem[];

  constructor() { }

  public ngOnInit(): void {
    const response: IApiResponse = mockResponse;
    this.cards = response.items;
  }

}
