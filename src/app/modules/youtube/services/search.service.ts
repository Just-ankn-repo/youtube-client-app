import { Injectable } from '@angular/core';
import { IItem } from '../models/api-response.model';
import mockResponse from '../../../../mock-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private cardDetails: IItem[];

  constructor() { }

  public getSearchResult(): IItem[] {
    return mockResponse.items;
  }

  public getCard(id: string): IItem {
    this.cardDetails = mockResponse.items.filter((item) => {
      return item.id === id;
    });
    return this.cardDetails[0];
  }
}
