import { IItem } from '../models/api-response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate',
  pure: false,
})
export class SortByDatePipe implements PipeTransform {

  public transform(cards: IItem[], filter: {type: string, value: boolean | string}): IItem[] {
    if (cards && filter && filter.type === 'sortByDate') {
      const sortedCards: IItem[] = cards.sort((card1: IItem, card2: IItem) => {
        const date1: number = new Date(card1.snippet.publishedAt).getTime();
        const date2: number = new Date(card2.snippet.publishedAt).getTime();
        return filter.value ? date1 - date2 : date2 - date1;
      });

      return sortedCards;
    }

    return cards;
  }

}
