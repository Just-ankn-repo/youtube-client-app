import { Injectable } from '@angular/core';
import { IItem } from '../models/api-response.model';
import {Observable} from "rxjs";
import {map, mergeMap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import apiVars from "../../../constants/api.const";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  public getSearchResult(keyword: string): Observable<IItem[]> {
    const apiURL = `${apiVars.apiURL}&q=${keyword}&key=${apiVars.apiKey}`;

    return this.http.get(apiURL).pipe(mergeMap(data => {
      const apiDetailsURL = `${apiVars.apiDetailsURL}&id=${data["items"].map(item => item.id.videoId).join(',')}&key=${apiVars.apiKey}`;
      return this.http.get(apiDetailsURL)
        .pipe(map(result => result["items"]
      ));
    }));
  }

  public getCard(id: string): Observable<IItem> {
    const apiDetailsURL = `${apiVars.apiDetailsURL}&id=${id}&key=${apiVars.apiKey}`;
    return this.http.get(apiDetailsURL).pipe(map(data => data["items"][0]));
  }
}
