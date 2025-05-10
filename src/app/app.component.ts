import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LangButtonComponent } from "./shared/components/lang-button/lang-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, LangButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTemplateApp';

}
