import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDoItem, ToDoService } from '../service/to-do.service';
import { v4 as uuidv4 } from 'uuid';
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
  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoService.getToDo()
      .subscribe(res => {
        console.log(res);
        for (const toDoTask of res) {
          this.taskList.push(this.getTaskForm(toDoTask));
        }
      });
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
    const newTask: ToDoItem = {
      status: true,
      subject: value.subject
    };
    const newFormGroup = this.getTaskForm(newTask);
    this.toDoService.createToDo(newFormGroup.value)
      .subscribe(res => {
        this.taskList.push(newFormGroup);
        this.taskForm.reset();
      });


    // console.log(this.taskList);
  }

  delete(task: any): void {
    console.log(task);
    const taskControls = this.taskList.controls;
    const indexVal = taskControls.indexOf(task);
    this.toDoService.deleteToDo(task.value.id)
      .subscribe(res => {
        // console.log(res)
        taskControls.splice(indexVal, 1);
      });
  }
  changeTaskStatus(task: any): void {
    const taskControls = this.taskList.controls;
    const value = (task as FormGroup).value;
    // console.log(value);
    const updatedTask: ToDoItem = {
      id: value.id,
      subject: value.subject,
      status: !value.status
    };
    const indexVal = taskControls.indexOf(task);
    const newForm = this.getTaskForm(updatedTask);
    this.toDoService.updateToDo(updatedTask.id, updatedTask)
      .subscribe(res => {
        console.log(res);
        taskControls.splice(indexVal, 1, newForm);
      });

  }

  getTaskForm(task: ToDoItem): FormGroup {
    return new FormGroup({
      id: new FormControl(task.id || uuidv4()),
      subject: new FormControl(task.subject),
      status: new FormControl(task.status === true ? true : false)
    });
  }
}

