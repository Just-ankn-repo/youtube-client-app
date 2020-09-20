import {ICustomCard} from "../../youtube/models/custom-card.model";
import * as CardActions from "../actions/card.actions";

const initialState: ICustomCard = {
  title: 'test',
  description: 'test',
  thumbnailUrl: 'https://img5.goodfon.ru/original/1280x800/0/38/to-the-river-gorod-ulitsa.jpg',
  videoUrl: 'https://img5.goodfon.ru/original/1280x800/0/38/to-the-river-gorod-ulitsa.jpg',
  creationDate: new Date().toDateString()
};

export function reducer(state: ICustomCard[] = [initialState], action: CardActions.Actions) {
  switch (action.type) {
    case CardActions.ADD_CUSTOM_CARD:
      return [...state, action.payload];
    case CardActions.REMOVE_CUSTOM_CARD:
      return state;
    default:
      return state;
  }
}
