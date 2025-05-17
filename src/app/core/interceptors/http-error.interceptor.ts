import { SharedService } from './../../shared/shared.service';
import { Injectable, inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    sharedService = inject(SharedService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejo de errores según el código de estado
        let errorMessage = 'Unknown Error';

        if (error.error instanceof ErrorEvent) {
          // Clientside's error
          errorMessage = `Error del cliente: ${error.error.message}`;
        } else {
          // Error from server
          errorMessage = `Error ${error.status}: ${error.message}`;
        }

        // Show notification
        this.sharedService.alert('error', errorMessage);

        return throwError(() => error);
      })
    );
  }
}
