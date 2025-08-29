import { Location } from '@angular/common';
import { Component, inject, input, Input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'back-button',
  imports: [MatIconModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss',
  standalone: true,
})
export class BackButtonComponent {

  private location = inject(Location);
  private router = inject(Router);
  path = input(null);

  navigateTo(){
    if(this.path() === null) {
      this.location.back();
    } else {
      this.router.navigate([this.path()])
    }
  }
}
