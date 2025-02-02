import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ContactComponentComponent} from '../../shared-components/contact-component/contact-component.component';
import {OurFactsComponentComponent} from './our-facts-component/our-facts-component.component';
import {OurCoursesComponentComponent} from './our-courses-component/our-courses-component.component';
import {BannerComponentComponent} from './banner-component/banner-component.component';
import {ApplyNowComponentComponent} from './apply-now-component/apply-now-component.component';
import {ServicesComponentComponent} from './services-component/services-component.component';
import {UpcomingMeetingsComponentComponent} from './upcoming-meetings-component/upcoming-meetings-component.component';

@Component({
  selector: 'app-home-page',
  imports: [
    ContactComponentComponent,
    OurFactsComponentComponent,
    OurCoursesComponentComponent,
    BannerComponentComponent,
    ApplyNowComponentComponent,
    ServicesComponentComponent,
    UpcomingMeetingsComponentComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  @ViewChild('mainMenu') mainMenu!: ElementRef;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    // Set first menu item as active
    const firstNavItem = this.mainMenu?.nativeElement.querySelector('li:first-child');
    if (firstNavItem) {
      firstNavItem.classList.add('active');
    }

    // Detect navigation changes and scroll accordingly
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToSection(window.location.hash, false);
      }
    });
  }

  scrollToSection(section: string, isAnimate: boolean): void {
    if (!section) return;

    const sectionId = section.replace('#', '');
    const element = document.querySelector(`[data-section="${sectionId}"]`);

    if (element) {
      const targetPosition = (element as HTMLElement).offsetTop;

      if (isAnimate) {
        window.scrollTo({top: targetPosition, behavior: 'smooth'});
      } else {
        window.scrollTo({top: targetPosition});
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 80;

    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const topEdge = sectionElement.offsetTop;
      const bottomEdge = topEdge + sectionElement.clientHeight;

      if (scrollPosition >= topEdge && scrollPosition <= bottomEdge) {
        const currentId = sectionElement.getAttribute('data-section');
        const activeLink = document.querySelector(`a[href="#${currentId}"]`);

        if (activeLink) {
          document.querySelectorAll('.nav li').forEach((li) => li.classList.remove('active'));
          activeLink.closest('li')?.classList.add('active');
        }
      }
    });
  }
}
