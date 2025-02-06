import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {Course} from '../../../interfaces/course';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-course-list-page',
  imports: [
    NgForOf,
    RouterLink,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCard,
    MatButton
  ],
  templateUrl: './course-list-page.component.html',
  styleUrl: './course-list-page.component.css'
})
export class CourseListPageComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}
