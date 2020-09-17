import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchKeyWord: string;

  constructor(private router: Router) { }

  public ngOnInit(): void { }

  public searchKeyword($event: Event): void {
    const eTarget: HTMLTextAreaElement = $event.target as HTMLTextAreaElement;
    this.searchKeyWord = eTarget.value;
    this.router.navigate([`/search/${this.searchKeyWord}`]);
  }
}
