import { SharedService } from './../../shared/shared.service';
import { ErrorHandler, Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  sharedService = inject(SharedService);

  handleError(error: any): void {
    // Show on console
    console.error('Global Error Ocurred', error);

    // If is an HTTP Error
    if (error instanceof HttpErrorResponse) {
      console.error('Error HTTP:', error.status, error.message);
      
    } else {
        console.error('App Error:', error);
    }
    const errorMessage = error?.error?.message || error.message
    this.sharedService.alert('error', errorMessage)
  }
}
