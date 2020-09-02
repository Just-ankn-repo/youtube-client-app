import { IItem } from './../models/api-response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKeyword'
})
export class SortByKeywordPipe implements PipeTransform {

  public transform(cards: IItem[], keyword: string): IItem[] {
    console.log(keyword)
    if (cards) {
      const pattern: RegExp = new RegExp(`.*${keyword}.*`, 'gi');
      const sortedCards: IItem[] = cards.filter((card: IItem) => {
        const isInclude: boolean = pattern.test(card.snippet.title);

        return isInclude;
      });

      return sortedCards;
    }
  }

}
