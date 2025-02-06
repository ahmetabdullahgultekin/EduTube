import {Component, OnInit} from '@angular/core';
import {Course} from '../../../interfaces/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../services/course.service';
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-course-detail-page',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatButton,
    NgIf
  ],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.css'
})
export class CourseDetailPageComponent implements OnInit {
  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe((data) => {
      this.course = data;
    });
  }
}
