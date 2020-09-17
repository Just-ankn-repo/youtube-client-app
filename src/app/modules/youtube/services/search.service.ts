import { Injectable } from '@angular/core';
import { IItem } from '../models/api-response.model';
import {Observable} from "rxjs";
import {map, mergeMap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public getSearchResult(keyword: string): Observable<IItem[]> {
    const apiURL = `search?part=snippet&type=video&maxResults=15&q=${keyword}`;

    return this.http.get(apiURL).pipe(mergeMap(data => {
      const apiDetailsURL = `videos?part=snippet,statistics&id=${data["items"].map(item => item.id.videoId).join(',')}`;
      return this.http.get(apiDetailsURL)
        .pipe(map(result => result["items"]
      ));
    }));
  }

  public getCard(id: string): Observable<IItem> {
    const apiDetailsURL = `videos?part=snippet,statistics&id=${id}`;
    return this.http.get(apiDetailsURL).pipe(map(data => data["items"][0]));
  }
}
