/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import colors from 'tailwindcss/colors';

@Component({
  selector: 'dynamic-background',
  imports: [CommonModule],
  templateUrl: './dynamic-background.component.html',
  styleUrl: './dynamic-background.component.scss',
  standalone: true,
})
export class DynamicBackgroundComponent {

  mainColor = colors.blue[600];
  bgColor = colors.gray[900];
  gradientStyle = `radial-gradient(circle at center, ${this.mainColor}, ${this.bgColor})`;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    
    this.gradientStyle = `radial-gradient(circle at ${x}% ${y}%, ${this.mainColor}, ${this.bgColor})`;
  }
}
