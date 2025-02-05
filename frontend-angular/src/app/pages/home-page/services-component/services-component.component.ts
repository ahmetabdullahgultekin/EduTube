import {Component} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-services-component',
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgStyle,
    NgIf
  ],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css'
})
export class ServicesComponentComponent {

  owlStage = {
    currentSlide: 0,
    visibleItems: 4,
    owlItem: {
      width: 292,
      margin: 30
    },
    owlImage: {
      width: 60,
      height: 60
    }
  }

  owlStageStyle = {
    transform: 'translate3d(0px, 0px, 0px)',
    owlItem: {
      width: '292px',
      margin: '30px'
    },
    owlImage: {
      width: '292px',
      height: '170px'
    }
  }

  services = [
    {
      icon: '/assets/images/service-icon-03.png',
      title: 'Web Design',
      description: 'We provide the best web design services.'
    },
    {
      icon: '/assets/images/service-icon-02.png',
      title: 'Web Development',
      description: 'We provide the best web development services.'
    },
    {
      icon: '/assets/images/service-icon-03.png',
      title: 'Graphic Design',
      description: 'We provide the best graphic design services.'
    },
    {
      icon: '/assets/images/service-icon-04.png',
      title: 'Digital Marketing',
      description: 'We provide the best digital marketing services.'
    },
    {
      icon: '/assets/images/service-icon-05.png',
      title: 'SEO Optimization',
      description: 'We provide the best SEO optimization services.'
    },
    {
      icon: '/assets/images/service-icon-06.png',
      title: 'App Development',
      description: 'We provide the best app development services.'
    }
  ];

  next() {
    if (this.owlStage.currentSlide < this.services.length - this.owlStage.visibleItems) {
      this.owlStage.currentSlide++;
      this.owlStageStyle.transform = `translate3d(-${this.owlStage.currentSlide * (this.owlStage.owlItem.width + 2 * this.owlStage.owlItem.margin)}px, 0px, 0px)`;
    } else {
      this.owlStage.currentSlide = 0;
      this.owlStageStyle.transform = 'translate3d(0px, 0px, 0px)';
    }
  }

  prev() {
    if (this.owlStage.currentSlide > 0) {
      this.owlStage.currentSlide--;
      this.owlStageStyle.transform = `translate3d(-${this.owlStage.currentSlide * (this.owlStage.owlItem.width + 2 * this.owlStage.owlItem.margin)}px, 0px, 0px)`;
    } else {
      this.owlStage.currentSlide = this.services.length - this.owlStage.visibleItems;
      this.owlStageStyle.transform = `translate3d(-${this.owlStage.currentSlide * (this.owlStage.owlItem.width + this.owlStage.owlItem.margin)}px, 0px, 0px)`;
    }
  }

}
