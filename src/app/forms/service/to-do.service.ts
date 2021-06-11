import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from 'src/app/shared/_helper/data-service';


@Injectable()
export class ToDoService extends DataService {

  constructor(http: HttpClient) {
    const url = 'http://localhost:3021/todo';
    super(http, url);
  }

  getToDo(): Observable<ToDoItem[]> {
    return this.getAll() as Observable<ToDoItem[]>;
  }
  createToDo(toDoData: ToDoItem): Observable<ToDoItem> {
    return this.create(toDoData) as Observable<ToDoItem>;
  }

  updateToDo(id: any, newToData: ToDoItem): Observable<ToDoItem> {
    return this.update(id, newToData) as Observable<ToDoItem>;
  }

  deleteToDo(id: any): Observable<any> {
    return this.delete(id) as Observable<any>;
  }
}

export interface ToDoItem {
  id?: any;
  subject: string;
  status: boolean;
}
