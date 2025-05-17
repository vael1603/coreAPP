/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { urls } from './mock-api';

export const httpMockInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url;

  for (const element of urls) {
    if (url.includes(element.url)) {
        console.log('Loaded from json for url: ' + url);
        return of(new HttpResponse({ status: element.code, body: ((element.json) as any).default }));
    }
  }

  return next(req);
};
