import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ToDoService {

  url = 'http://localhost:3021/todo';
  constructor(private http: HttpClient) { }

  getToDo(): Observable<ToDoItem[]> {
    return (this.http.get(this.url) as Observable<ToDoItem[]>)
      .pipe(catchError(handleError));
  }
  createToDo(toDoData: ToDoItem): Observable<ToDoItem> {
    return (this.http.post(this.url, toDoData) as Observable<ToDoItem>)
      .pipe(catchError(handleError));
  }

  updateToDo(id: any, newToData: ToDoItem): Observable<ToDoItem> {
    return (this.http.put(this.url + '/' + 'id', newToData) as Observable<ToDoItem>)
      .pipe(catchError(handleError));
  }
  deleteToDo(id: any): Observable<any> {
    return (this.http.delete(this.url + '/' + id) as Observable<any>)
      .pipe(catchError(handleError));
  }
}

export interface ToDoItem {
  id?: any;
  subject: string;
  status: boolean;
}

export const handleError = (error: HttpErrorResponse) => {
  const status = error.status;
  if (status === 404) {
    console.log('URL Not found');
  } else
    if (status === 400) {
      console.log('Invalid Input');
    } else
      if (status === 401) {
        console.log('Unauthorize Access');
      } else {
        console.log('unexpected error');
      }
  return throwError({});
};
