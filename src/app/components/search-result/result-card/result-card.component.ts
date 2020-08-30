import {Component, Input, OnInit} from '@angular/core';
import { IApiResponse, IItem } from "../../../models/api-response.model";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  @Input() card: IItem;
}
