import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './forms/contact/contact.component';
import { SignupComponent } from './forms/signup/signup.component';
import { TodoListComponent } from './forms/todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'course',
    component: CoursesComponent
  },
  {
    path: 'task',
    component: TodoListComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'user',
    component: SignupComponent
  },
  {
    path: 'github',
    loadChildren: () => import('./git/git.module').then(m => m.GitModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
