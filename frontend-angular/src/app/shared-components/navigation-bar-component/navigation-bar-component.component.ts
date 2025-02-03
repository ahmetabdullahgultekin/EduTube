import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation-bar-component',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation-bar-component.component.html',
  styleUrl: './navigation-bar-component.component.css'
})
export class NavigationBarComponentComponent {

}
