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
    delay: parseFloat((Math.random() * 10).toFixed(2)),
    darkcolor: this.generateRandomGray(),
    color: this.generateRandomBlue(),
  }));


  generateRandomGray() {
    const gray = Math.floor(Math.random() * 256);
    return `rgb(${gray}, ${gray}, ${gray})`;
  }

  generateRandomBlue() {
    const gray = Math.floor(Math.random() * 256);
    return `rgb(${gray}, ${gray}, 255)`;
  }

}
