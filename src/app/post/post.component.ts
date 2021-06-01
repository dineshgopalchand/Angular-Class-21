import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LikeValue } from '../like/like.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: Post[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.http.get('http://localhost:3021/posts')
      .subscribe(res => {
        console.log(res);
        this.postList = res as Post[];
      });
  }
  updatePostLike(likeStatus: LikeValue): void {
    console.log(likeStatus);
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
