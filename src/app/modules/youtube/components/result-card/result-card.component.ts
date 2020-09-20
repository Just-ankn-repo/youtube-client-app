import {Component, Input} from '@angular/core';
import {IItem} from '../../models/api-response.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  @Input() public card: IItem;
}
