/* eslint-disable @angular-eslint/component-selector */
import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'lang-button',
  imports: [MatIconModule],
  templateUrl: './lang-button.component.html',
  styleUrl: './lang-button.component.scss'
})
export class LangButtonComponent {

  translocoService = inject(TranslocoService);
  currentLang = signal<string>(this.translocoService.getActiveLang());

  changeLanguage() {
    const lang = this.currentLang() === 'en' ? 'es' : 'en';
    this.translocoService.setActiveLang(lang);
    this.currentLang.set(lang);
  }
}
