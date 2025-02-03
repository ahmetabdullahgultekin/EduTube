import {RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';
import {FooterComponentComponent} from './shared-components/footer-component/footer-component.component';
import {
  NavigationBarComponentComponent
} from './shared-components/navigation-bar-component/navigation-bar-component.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
//import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponentComponent,
    NavigationBarComponentComponent,
    HttpClientModule,
    FormsModule,
    //TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduTube';

  /*
  constructor(public translateService: TranslateService) {}

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }

   */
}
