import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseTitle = 'Courses List';
  courseList = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Nodejs',
    'MongoDB',
    'Java',
    'Python'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getCourseCount(): number {
    return this.courseList.length;
  }
  get courseCount(): number {
    return this.courseList.length;
  }

}
