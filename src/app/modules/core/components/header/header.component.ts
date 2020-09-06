import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../../youtube/models/api-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public searchResult: EventEmitter<IItem[]> = new EventEmitter();
  @Output() public filter: EventEmitter<{type: string, value: boolean | string}> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public updateSearchResults($event: IItem[]): void {
    this.searchResult.emit($event);
  }

  public filterSearchResults($event: {type: string, value: boolean | string}): void {
    this.filter.emit($event);
  }
}
