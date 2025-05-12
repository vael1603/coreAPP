import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./features/background/background.component";
import { LangButtonComponent } from "./shared/components/lang-button/lang-button.component";
import { ThemeButtonComponent } from './shared/components/theme-button/theme-button.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, LangButtonComponent, ThemeButtonComponent, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTemplateApp';

}
