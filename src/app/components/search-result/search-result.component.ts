import { Component, OnInit, Input} from '@angular/core';
import { IItem } from '../../models/api-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() public cards: IItem[];
  @Input() public filter: {type: string, value: boolean | string};

  constructor() { }

  public ngOnInit(): void { }
}
