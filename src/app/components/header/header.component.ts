import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../models/api-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchResult = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {
  }

  updateSearchResults($event: IItem[]) {
    this.searchResult.emit($event);
  }
}
