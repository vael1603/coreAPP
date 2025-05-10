/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'squares-background',
  imports: [CommonModule],
  templateUrl: './squares-background.component.html',
  styleUrl: './squares-background.component.scss'
})
export class SquaresBackgroundComponent {


  squares = Array.from({ length: 24 }, () => ({
    size: Math.floor(Math.random() * 100) + '%', // 10px a 30px
    delay: parseFloat((Math.random() * 10).toFixed(2)), // 0s a 5s
    color: this.generateRandomGray()
  }));


  generateRandomGray() {
    const gray = Math.floor(Math.random() * 256);
    return `rgb(${gray}, ${gray}, ${gray})`;
  }

}
