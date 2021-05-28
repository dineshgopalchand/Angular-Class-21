import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    ContactComponent,
    SignupComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent,
    SignupComponent,
    TodoListComponent
  ]
})
export class CustomFormsModule { }
