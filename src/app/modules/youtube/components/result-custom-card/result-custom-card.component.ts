import {Component, Input} from '@angular/core';
import {ICustomCard} from "../../models/custom-card.model";

@Component({
  selector: 'app-result-custom-card',
  templateUrl: './result-custom-card.component.html',
  styleUrls: ['./result-custom-card.component.scss']
})
export class ResultCustomCardComponent {
  @Input() public customCard: ICustomCard;
}
