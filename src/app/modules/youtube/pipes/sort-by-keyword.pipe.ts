import { IItem } from '../models/api-response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKeyword'
})
export class SortByKeywordPipe implements PipeTransform {

  public transform(cards: IItem[], filter: {type: string, value: boolean | string}): IItem[] {
    if (cards && filter && filter.type === 'sortByKeyword' && filter.value !== '') {
      const pattern: RegExp = new RegExp(`.*${filter.value}.*`, 'gi');
      const sortedCards: IItem[] = cards.filter((card: IItem) => {
        const isInclude: boolean = pattern.test(card.snippet.title);

        return isInclude;
      });

      return sortedCards;
    }

    return cards;
  }

}
