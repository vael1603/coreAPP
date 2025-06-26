import {
    HttpHandlerFn,
    HttpInterceptorFn,
    HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
/**
 * HttpLangInterceptor adds the current language to the request headers.
 * This is useful for APIs that need to know the language of the request.
 */
export const HttpLangInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {

    const translocoService = inject(TranslocoService);
    const currentLang = translocoService.getActiveLang();

  
    const cloned = req.clone({
        headers: req.headers.append('x-lang', currentLang),
    });

    return next(cloned);
}