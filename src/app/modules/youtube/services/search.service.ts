import { IApiResponse } from './../models/api-response.model';
import { Injectable } from '@angular/core';
import { IItem } from '../models/api-response.model';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public getSearchResult(keyword: string): Observable<IItem[]> {
    const apiURL: string = 'search?part=snippet&type=video&maxResults=15&q=' + keyword;

    return this.http.get<IApiResponse>(apiURL).pipe(
      mergeMap(data => {
        const ids: string = data.items.map(item => item.id.videoId).join(',');
        const apiDetailsURL: string = 'videos?part=snippet,statistics&id=' + ids;
        return this.http.get<IApiResponse>(apiDetailsURL).pipe(
            map(result => result.items
        ));
    }));
  }

  public getCard(id: string): Observable<IItem> {
    const apiDetailsURL: string = 'videos?part=snippet,statistics&id=' + id;
    return this.http.get<IApiResponse>(apiDetailsURL).pipe(map(data => data.items[0]));
  }
}
