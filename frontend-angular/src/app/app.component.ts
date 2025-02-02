import {RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';
import {FooterComponentComponent} from './shared-components/footer-component/footer-component.component';
import {
  NavigationBarComponentComponent
} from './shared-components/navigation-bar-component/navigation-bar-component.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponentComponent,
    NavigationBarComponentComponent,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular';

}
