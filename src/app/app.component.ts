import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LangButtonComponent } from "./shared/components/lang-button/lang-button.component";
import { DynamicBackgroundComponent } from "./shared/components/dynamic-background/dynamic-background.component";
import { SquaresBackgroundComponent } from "./shared/components/squares-background/squares-background.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, LangButtonComponent, DynamicBackgroundComponent, SquaresBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTemplateApp';

}
