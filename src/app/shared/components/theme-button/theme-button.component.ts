import { CommonModule } from '@angular/common';
import { SharedService } from './../../shared.service';
/* eslint-disable @angular-eslint/component-selector */
import { MatIconModule } from '@angular/material/icon';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'theme-button',
  imports: [CommonModule, MatIconModule],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {

  sharedService = inject(SharedService);
  currentTheme = toSignal(this.sharedService.currentTheme$);
  isDarkMode = computed(() => this.currentTheme() === 'dark');

  changeTheme() {
    this.sharedService.changeTheme(this.currentTheme());
  }
  
}
