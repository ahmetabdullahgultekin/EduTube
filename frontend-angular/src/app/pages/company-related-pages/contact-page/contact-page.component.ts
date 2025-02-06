import {Component} from '@angular/core';
import {ContactComponentComponent} from '../../../shared-components/contact-component/contact-component.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    ContactComponentComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
