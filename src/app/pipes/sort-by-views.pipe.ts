import { IItem } from './../models/api-response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByViews'
})
export class SortByViewsPipe implements PipeTransform {

  public transform(cards: IItem[], desc: boolean): IItem[] {
    if (cards) {
      const sortedCards: IItem[] = cards.sort((card1: IItem, card2: IItem) => {
        const views1: number = parseInt(card1.statistics.viewCount, 10);
        const views2: number = parseInt(card2.statistics.viewCount, 10);

        return desc ? views1 - views2 : views2 - views1;
      });
      console.log(cards)
      return sortedCards;
    }
  }

}
