import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from 'src/app/shared/_helper/data-service';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService extends DataService {


  constructor(http: HttpClient) {
    const url = environment.API.postlink;
    super(http, url);
  }

  getPost(): Observable<Post[]> {
    return this.getAll() as Observable<Post[]>;
  }
  createPost(postData: Post): Observable<Post> {
    return this.create(postData) as Observable<Post>;
  }

  updatePost(id: any, post: Post): Observable<Post> {
    return this.update(id, post) as Observable<Post>;
  }
  deletePost(id: any): Observable<any> {
    return this.delete(id) as Observable<any>;
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
