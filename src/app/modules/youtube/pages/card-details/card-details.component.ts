import { Component, OnInit } from '@angular/core';
import { IItem } from "../../models/api-response.model";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public card: IItem
  public cardId: string;

  constructor(private activateRoute: ActivatedRoute,
              private search: SearchService) {
    this.cardId = activateRoute.snapshot.params['cardId']
  }

  public ngOnInit(): void {
    this.card = this.search.getCard(this.cardId);
  }

}
