import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './services/course.service';
import { CoursesService } from './services/courses.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipeModule
  ],
  providers: [
    CoursesService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
