import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-services-component',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css'
})
export class ServicesComponentComponent {

  image = {
    width: 60,
    height: 60,
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

}
