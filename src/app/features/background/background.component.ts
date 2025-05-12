/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { DynamicBackgroundComponent } from "./components/dynamic-background/dynamic-background.component";
import { SquaresBackgroundComponent } from "./components/squares-background/squares-background.component";

@Component({
  standalone: true,
  selector: 'background',
  imports: [DynamicBackgroundComponent, SquaresBackgroundComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

}
