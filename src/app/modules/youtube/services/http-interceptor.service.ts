import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiVars from '../../../constants/api.const';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
    const newUrl: string = apiVars.apiURL + req.url + '&key=' + apiVars.apiKey;
    const changedReq: HttpRequest<{}> = req.clone({ url: newUrl, method: 'get' });
    return next.handle(changedReq);
  }
}
