import { Injectable } from '@angular/core';

interface IFilter {
  type: string;
  value: boolean | string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters: IFilter = {
    type: '',
    value: ''
  };

  constructor() { }

  public setFilter(filterType: string, filterValue: boolean | string): void {
    this.filters.type = filterType;
    this.filters.value = filterValue;
  }

  public getFilters(): IFilter {
    return this.filters;
  }
}
