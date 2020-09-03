import { Component, Output, EventEmitter } from '@angular/core';
import { IItem } from './models/api-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client-app';
  public cards: IItem[];
  public filter: {type: string, value: boolean | string};

  public updateSearchResults($event: IItem[]): void {
    this.cards = $event;
  }

  public filterSearchResults($event: {type: string, value: boolean | string}): void {
    this.filter = $event;
  }
}
