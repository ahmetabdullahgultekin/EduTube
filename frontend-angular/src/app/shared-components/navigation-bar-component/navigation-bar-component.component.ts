import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {ViewportScroller} from '@angular/common';

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

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
        }
      }
    });
  }

}
