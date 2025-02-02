import {ChangeDetectorRef, Component, ElementRef, HostListener} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-our-facts-component',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './our-facts-component.component.html',
  styleUrl: './our-facts-component.component.css'
})
export class OurFactsComponentComponent {

  counterLoaded: boolean = false;

  counters = [
    {
      title: 'Success Percentage',
      counter: 'box1Counter',
      currentValue: 0,
      upTo: 94
    },
    {
      title: 'Current Teachers',
      counter: 'box2Counter',
      currentValue: 0,
      upTo: 126
    },
    {
      title: 'Current Students',
      counter: 'box3Counter',
      currentValue: 0,
      upTo: 2345
    },
    {
      title: 'Awards',
      counter: 'box4Counter',
      currentValue: 0,
      upTo: 32
    }
  ];


  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // Initialize logic if necessary
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (this.isVisible(this.el.nativeElement) && !this.counterLoaded) {
      this.counterLoaded = true;
      this.animateCounter();
    }
  }

  isVisible(element: any): boolean {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;

    return elementBottom <= (scrollTop + windowHeight) && elementTop >= scrollTop && element.offsetParent !== null;
  }

  animateCounter(): void {
    this.counters.forEach(counter => {
      this.animateSingleCounter(counter);
    });
  }

  animateSingleCounter(counter: any): void {
    const interval = setInterval(() => {
      if (counter.currentValue < counter.upTo) {
        const add = Math.ceil(counter.upTo / 200);
        counter.currentValue += add;
        counter.currentValue = counter.currentValue > counter.upTo ? counter.upTo : counter.currentValue;
        this.cdr.detectChanges();
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval time as needed
  }
}
