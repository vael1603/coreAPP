import { inject, OnInit } from '@angular/core';
/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'dynamic-background',
  imports: [CommonModule],
  templateUrl: './dynamic-background.component.html',
  styleUrl: './dynamic-background.component.scss',
  standalone: true,
})
export class DynamicBackgroundComponent implements OnInit {
  

  sharedService = inject(SharedService);
  currentTheme = toSignal(this.sharedService.currentTheme$)
  
  styles = getComputedStyle(document.documentElement);
  mainColor = this.styles.getPropertyValue('--main-color');
  bgColor = this.styles.getPropertyValue('--main-bg-color');
  gradientStyle = `radial-gradient(circle at center, ${this.mainColor}, ${this.bgColor})`;

  axisX = 0;
  axisY = 0;

  ngOnInit(): void {
    this.sharedService.currentTheme$.subscribe(() => {
      const styles = getComputedStyle(document.documentElement);
  
      this.mainColor = styles.getPropertyValue('--main-color');
      this.bgColor = styles.getPropertyValue('--main-bg-color');
      this.gradientStyle = `radial-gradient(circle at ${this.axisX}% ${this.axisY}%, ${this.mainColor}, ${this.bgColor})`;
    })
  }


  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    this.axisX = (event.clientX / window.innerWidth) * 100;
    this.axisY = (event.clientY / window.innerHeight) * 100;
    
    this.gradientStyle = `radial-gradient(circle at ${this.axisX}% ${this.axisY}%, ${this.mainColor}, ${this.bgColor})`;
  }
}
