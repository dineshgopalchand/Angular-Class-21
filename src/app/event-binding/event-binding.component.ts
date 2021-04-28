import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  title = 'Show Course - Event Binding';
  showCourse = false;

  firstName = '';
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  get courseList(): string[] {
    return this.coursesService.courseLists;
  }
  showCourseList(event: Event): void {
    console.log(event);
    console.log('show course list function get called');
    this.showCourse = !this.showCourse;
  }
  parentDiv(event: Event): void {
    console.log('parent', event);
  }
  childDiv(event: Event): void {
    console.log('child', event);
  }
  buttonClick(event: Event): void {
    event.stopPropagation();
    console.log('button', event);
  }

  updateFirstname(event: Event): void {
    const inputVal = (event.target as HTMLInputElement).value;
    // console.log((event.target as HTMLInputElement).value);
    this.firstName = inputVal;

  }
}
