import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { InputSubmitField } from '../shared/directives/name-validation.directive';

@Component({
  selector: 'app-courses-listing',
  templateUrl: './courses-listing.component.html',
  styleUrls: ['./courses-listing.component.scss']
})
export class CoursesListingComponent implements OnInit {

  titleVal = 'Course List';
  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
  }
  get courseList(): string[] {
    return this.courseService.courseLists;
  }
  onDelete(value: string): void {
    console.log(value);
    this.courseService.removeCourse(value);
    console.log(this.courseService.courseLists);
  }
  addNewCourse(newCourse: InputSubmitField): void {
    // console.log(newCourse);
    this.courseService.addCourse(newCourse.value);
  }

}
