import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-course',
    // template: '<h3>{{courseTitle}}</h3>',
    template: `<h3>{{courseTitle}}</h3>
    <ul *ngIf="courseList.length>0">
    <li *ngFor="let course of courseList ">
        {{course}}
    </li>
</ul>

<p *ngIf="courseList.length==0">
    No courses available
</p>
    `,
})
export class CourseComponent {
    courseTitle = 'Course List';
    courseList: string[] = [];
    constructor(private courseService: CoursesService) {
        this.courseList = this.courseService.courseLists;
    }
}
