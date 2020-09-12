import {Component, Input, OnInit} from '@angular/core';
import { IApiResponse, IItem } from '../../models/api-response.model';
import {CardDetailsService} from "../../services/card-details.service";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() public card: IItem;

  constructor() { }

  public ngOnInit(): void {
  }
}
