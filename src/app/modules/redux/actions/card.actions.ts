import {Action} from "@ngrx/store";

import {ICustomCard} from "../../youtube/models/custom-card.model";

export const ADD_CUSTOM_CARD = '[Card] Add Custom Card';
export const REMOVE_CUSTOM_CARD = '[Card] Remove Custom Card';

export class AddCustomCard implements Action {
  readonly type = ADD_CUSTOM_CARD;

  constructor(public payload: ICustomCard) {
  };
}

export class RemoveCustomCard implements Action {
  readonly type = REMOVE_CUSTOM_CARD;

  constructor(public payload: number) {
  };
}

export type Actions = AddCustomCard | RemoveCustomCard;
