import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class PostService {

  url = 'http://localhost:3021/posts';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get(this.url) as Observable<Post[]>;
  }
  create(postData: Post): Observable<Post> {
    return this.http.post(this.url, postData) as Observable<Post>;
  }
}

export interface Post {
  'id': string;
  'title': string;
  'author': string;
  'description': string;
  like?: boolean;
  count?: number;
}
