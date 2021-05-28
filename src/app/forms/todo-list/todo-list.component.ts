import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  taskForm = new FormGroup({
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ])
    // ,
    // status: new FormControl()
  });
  taskListForm = new FormGroup({
    taskList: new FormArray([])
  });
  constructor() { }

  ngOnInit(): void {
  }

  get subject(): FormControl {
    return this.taskForm.get('subject') as FormControl;
  }
  get taskList(): FormArray {
    return this.taskListForm.get('taskList') as FormArray;
  }
  addCourse(): void {
    // console.log(this.taskForm.value);
    const value = this.taskForm.value;
    this.taskList.push(this.getTaskForm(value.subject, true));
    this.taskForm.reset();
    // console.log(this.taskList);
  }

  delete(task: any): void {
    console.log(task);
    const taskControls = this.taskList.controls;
    const indexVal = taskControls.indexOf(task);
    taskControls.splice(indexVal, 1);
  }
  changeTaskStatus(task: any): void {
    const taskControls = this.taskList.controls;
    const value = (task as FormGroup).value;
    // console.log(value);
    const newForm = this.getTaskForm(value.subject, !value.status);
    const indexVal = taskControls.indexOf(task);
    console.log(newForm.value, indexVal);
    taskControls.splice(indexVal, 1, newForm);
  }

  getTaskForm(subject: string, status: boolean | undefined): FormGroup {
    return new FormGroup({
      subject: new FormControl(subject),
      status: new FormControl(status === true ? true : false)
    });
  }
}
