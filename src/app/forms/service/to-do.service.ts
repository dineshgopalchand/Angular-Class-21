import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ToDoService {

  url = 'http://localhost:3021/todo';
  constructor(private http: HttpClient) { }

  getToDo(): Observable<ToDoItem[]> {
    return this.http.get(this.url) as Observable<ToDoItem[]>;
  }
  createToDo(toDoData: ToDoItem): Observable<ToDoItem> {
    return this.http.post(this.url, toDoData) as Observable<ToDoItem>;
  }

  updateToDo(id: any, newToData: ToDoItem): Observable<ToDoItem> {
    return this.http.put(this.url + '/' + id, newToData) as Observable<ToDoItem>;
  }
  deleteToDo(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id) as Observable<any>;
  }
}

export interface ToDoItem {
  id?: any;
  subject: string;
  status: boolean;
}
