import { Injectable } from '@angular/core';
import { IItem } from '../models/api-response.model';
import mockResponse from '../../../../mock-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  getSearchResult(keyword: string): IItem[] {
    return mockResponse.items
  }
}
