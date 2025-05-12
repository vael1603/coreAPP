import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

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

}
