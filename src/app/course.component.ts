import { Component } from '@angular/core';

@Component({
    selector: 'app-course',
    // template: '<h3>{{courseTitle}}</h3>',
    template: `<h3>{{courseTitle}}</h3>
        <ul>
            <li *ngFor="let course of courseList">{{course}}</li>
        </ul>
    `,
})
export class CourseComponent {
    courseTitle = 'Course List';
    courseList = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Nodejs',
        'MongoDB',
        'Java'
    ];
}
