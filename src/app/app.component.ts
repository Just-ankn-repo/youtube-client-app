import { Component } from '@angular/core';
import { IItem } from './models/api-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client-app';

  public cards: IItem[];

  updateSearchResults($event: IItem[]) {
    this.cards = $event;
  }
}
