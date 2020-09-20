import {Component, OnInit} from '@angular/core';
import {StoreState} from "../../../redux/store.state";
import {Store} from "@ngrx/store";
import * as CardActions from '../../../redux/actions/card.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private store: Store<StoreState>) {
  }

  ngOnInit(): void {
  }

  onActivate(componentReference) {
    componentReference.newCustomCard.subscribe((data) => {
      this.store.dispatch(new CardActions.AddCustomCard(data));
    })
  }
}
