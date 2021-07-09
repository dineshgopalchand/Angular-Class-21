import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { ToDoService } from './service/to-do.service';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    ContactComponent,
    SignupComponent,
    TodoListComponent,
    FormBuilderDemoComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToDoService
  ],
  exports: [
    ContactComponent,
    SignupComponent,
    TodoListComponent,
    FormBuilderDemoComponent,
    SigninComponent
  ]
})
export class CustomFormsModule { }
