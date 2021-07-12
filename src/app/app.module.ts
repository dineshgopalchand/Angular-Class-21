import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesListingComponent } from './courses-listing/courses-listing.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CustomFormsModule } from './forms/custom-forms.module';
import { HomeComponent } from './home/home.component';
import { LikeModule } from './like/like.module';
import { LocationMapComponent } from './location-map/location-map.component';
import { PipeModule } from './pipe/pipe.module';
import { PostModule } from './post/post.module';
import { ResuableDemoComponent } from './resuable-demo/resuable-demo.component';
import { ResuableComponent } from './resuable/resuable.component';
import { CourseService } from './services/course.service';
import { CoursesService } from './services/courses.service';
import { SharedModule } from './shared/shared.module';
import { ThemesModule } from './themes/themes.module';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { fakeBackendProvider } from './services/fakebackend/fakebackend';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ErrorInterceptor } from './service/error.interceptor';
import { UserComponent } from './user/user.component';


// const routes: Routes = [
//   {
//     path: 'contact',
//     component: ContactComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ResuableComponent,
    ResuableDemoComponent,
    DashboardComponent,
    DashboardMenuComponent,
    LocationMapComponent,
    CoursesListingComponent,
    HomeComponent,
    NotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    PipeModule,
    SharedModule,
    ThemesModule,
    CustomFormsModule,
    HttpClientModule,
    PostModule,
    LikeModule
  ],
  providers: [
    CoursesService,
    CourseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },

    // only in devlopment environment use fakeBackendProvider
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
