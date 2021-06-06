import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class PostService {

  url = 'http://localhost:3021/posts';
  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get(this.url) as Observable<Post[]>;
  }
  createPost(postData: Post): Observable<Post> {
    return this.http.post(this.url, postData) as Observable<Post>;
  }

  updatePost(id: any, post: Post): Observable<Post> {
    return this.http.put(this.url + '/' + id, post) as Observable<Post>;
  }
  deletePost(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id) as Observable<any>;
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
