import { IItem } from './../models/api-response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  public transform(cards: IItem[], desc: boolean): IItem[] {
    if (cards) {
      const sortedCards: IItem[] = cards.sort((card1: IItem, card2: IItem) => {
        const date1: number = new Date(card1.statistics.viewCount).getTime();
        const date2: number = new Date(card2.statistics.viewCount).getTime();

        return desc ? date1 - date2 : date2 - date1;
      });

      return sortedCards;
    }
  }

}
