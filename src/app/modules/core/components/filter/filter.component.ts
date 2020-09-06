import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() public filter: EventEmitter<{type: string, value: boolean | string}> = new EventEmitter();
  public filterByDateDesc: boolean;
  public filterByViewsDesc: boolean;
  public filterByKeywordValue: string;

  constructor() { }

  public ngOnInit(): void {
    this.filterByDateDesc = false;
    this.filterByViewsDesc = false;
    this.filterByKeywordValue = '';
  }

  public filterByDate(): boolean {
    this.filterByDateDesc = this.filterByDateDesc === false ? true : false;
    this.filter.emit({ type: 'sortByDate', value: this.filterByDateDesc});

    return false;
  }

  public filterByViews(): boolean {
    this.filterByViewsDesc = this.filterByViewsDesc === false ? true : false;
    this.filter.emit({ type: 'sortByViews', value: this.filterByViewsDesc});

    return false;
  }

  public filterByKeyword(keyword: string): void {
    this.filterByKeywordValue = keyword;
    this.filter.emit({ type: 'sortByKeyword', value: this.filterByKeywordValue});
  }
}
