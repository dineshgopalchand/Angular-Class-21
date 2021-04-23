import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class CourseService {
    private courseList: string[] = [
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

    get courseLists(): string[] {
        return this.courseList;
    }

    removeCourse(course: string): void {
        const indexVal = this.courseLists.indexOf(course);
        this.courseLists.splice(indexVal, 1);
    }
}


