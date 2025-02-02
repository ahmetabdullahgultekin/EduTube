import {Component} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-our-courses-component',
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf,
    NgStyle
  ],
  templateUrl: './our-courses-component.component.html',
  styleUrl: './our-courses-component.component.css'
})
export class OurCoursesComponentComponent {

  owlStage = {
    currentSlide: 0,
    visibleItems: 4,
    owlItem: {
      width: 270,
      margin: 10
    },
    owlImage: {
      width: 270,
      height: 170
    }
  }

  owlStageStyle = {
    transform: 'translate3d(0px, 0px, 0px)',
    owlItem: {
      width: '270px',
      margin: '10px'
    },
    owlImage: {
      width: '270px',
      height: '170px'
    }
  }

  courses = [
    {
      image: 'assets/images/course-01.jpg',
      title: 'Web Design Templates at your finger tips',
      price: '$340',
      rating: 5
    },
    {
      image: 'assets/images/course-02.jpg',
      title: 'Learn JavaScript in 30 Days',
      price: '$290',
      rating: 4
    },
    {
      image: 'assets/images/course-03.jpg',
      title: 'Mastering Angular for Beginners',
      price: '$320',
      rating: 5
    },
    {
      image: 'assets/images/course-04.jpg',
      title: 'React for Absolute Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-05.jpg',
      title: 'VueJS for Beginners',
      price: '$310',
      rating: 5
    },
    {
      image: 'assets/images/course-06.jpg',
      title: 'NodeJS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-07.jpg',
      title: 'MongoDB for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-08.jpg',
      title: 'ExpressJS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-09.jpg',
      title: 'SASS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-10.jpg',
      title: 'LESS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-11.jpg',
      title: 'Stylus for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-12.jpg',
      title: 'Bootstrap 4 for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-13.jpg',
      title: 'Foundation for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-14.jpg',
      title: 'Materialize CSS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-15.jpg',
      title: 'Bulma CSS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-16.jpg',
      title: 'Semantic UI for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-17.jpg',
      title: 'Ant Design for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-18.jpg',
      title: 'Material Design for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-19.jpg',
      title: 'Tailwind CSS for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-20.jpg',
      title: 'UI/UX Design for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-21.jpg',
      title: 'Adobe XD for Beginners',
      price: '$300',
      rating: 4
    },
    {
      image: 'assets/images/course-22.jpg',
      title: 'Figma for Beginners',
      price: '$300',
      rating: 4
    },
  ];

  next() {
    if (this.owlStage.currentSlide < this.courses.length - this.owlStage.visibleItems) {
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
      this.owlStage.currentSlide = this.courses.length - this.owlStage.visibleItems;
      this.owlStageStyle.transform = `translate3d(-${this.owlStage.currentSlide * (this.owlStage.owlItem.width + this.owlStage.owlItem.margin)}px, 0px, 0px)`;
    }
  }

}
