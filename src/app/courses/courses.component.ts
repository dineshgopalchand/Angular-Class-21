import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseTitle = 'Courses List';
  courseList: string[] = [];
  constructor(public courseService: CoursesService) {
    this.courseList = this.courseService.courseLists;
  }

  ngOnInit(): void {
  }

  getCourseCount(): number {
    return this.courseList.length;
  }
  get courseCount(): number {
    return this.courseList.length;
  }
  removeCourse(course: string): void {
    this.courseService.removeCourse(course);
  }

}
