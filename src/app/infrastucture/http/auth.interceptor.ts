import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiKey = '3386bab6b90349650a531f1d4f14e47c';
const apiDomain = 'https://api.themoviedb.org/3';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const secureReq = req.clone({
      url: apiDomain + req.url,
      params: req.params.append('api_key', apiKey),
    });
    return next.handle(secureReq);
  }
}
