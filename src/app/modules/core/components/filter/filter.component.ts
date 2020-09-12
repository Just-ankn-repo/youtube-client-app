import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import { FilterService } from "../../../shared/services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filterByDateDesc: boolean = false;
  public filterByViewsDesc: boolean = false;

  constructor(private filters: FilterService) { }

  public ngOnInit(): void { }

  public filterByDate(): boolean {
    this.filterByDateDesc = !this.filterByDateDesc;
    this.filters.setFilter('sortByDate', this.filterByDateDesc);
    return false;
  }

  public filterByViews(): boolean {
    this.filterByViewsDesc = !this.filterByViewsDesc;
    this.filters.setFilter('sortByViews', this.filterByViewsDesc);
    return false;
  }

  public filterByKeyword(keyword: string): void {
    this.filters.setFilter('sortByKeyword', keyword);
  }
}
