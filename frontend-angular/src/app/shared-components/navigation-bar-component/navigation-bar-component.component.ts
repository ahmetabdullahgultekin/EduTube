import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf, ViewportScroller} from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navigation-bar-component',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './navigation-bar-component.component.html',
  styleUrl: './navigation-bar-component.component.css',
  providers: [
    AuthService
  ]
})
export class NavigationBarComponentComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then(r => {
        // Reload the page to update the navigation bar
        window.location.reload();
      }
    );
  }
}
