import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackDialogComponent } from './components/snack-dialog/snack-dialog.component';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  snackBar = inject(MatSnackBar);
  translocoService = inject(TranslocoService);

  currentThemeSubject = new BehaviorSubject<string>(document.body.getAttribute('data-theme') || 'dark');
  currentTheme$ = this.currentThemeSubject.asObservable();

  getCurrentTheme(): string {
    return this.currentThemeSubject.getValue();
  }
  // Function to change the theme
  changeTheme(theme: string | undefined) {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    this.currentThemeSubject.next(newTheme);
  }

  private snackConfig = {
    error:   { panelClass: "error-snack-bar",    duration: 500000 },
    warn:    { panelClass: "warning-snack-bar",  duration: 3000 },
    success: { panelClass: "success-snack-bar",  duration: 2000 },
    info:    { panelClass: "info-snack-bar",     duration: 4000 },
  }

  alert(type: 'info'|'success'|'warn'|'error', msj: string) {
    this.snackBar.openFromComponent(SnackDialogComponent, { 
        data: {
            message: this.translocoService.translate(msj), // add translation on assets/i18n
            styleclass: this.snackConfig[type].panelClass,
            type: type
        },
        duration: this.snackConfig[type].duration,
        panelClass: ['custom-snackbar-container']
      });
  }

}
