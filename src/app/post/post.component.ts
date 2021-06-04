import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LikeValue } from '../like/like.component';
import { v4 as uuidv4 } from 'uuid';
import { Post, PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: Post[] = [];
  createPostForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  });
  newDataInserted = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.postService.getAll()
      .subscribe(res => {
        // console.log(res);
        this.postList = res;
      });
  }
  updatePostLike(likeStatus: LikeValue): void {
    console.log(likeStatus);
  }
  createPost(): void {
    const formVal = this.createPostForm.value;
    const postData: Post = {
      author: formVal.author,
      description: formVal.description,
      title: formVal.title,
      id: uuidv4(),
      count: 0,
      like: false
    };
    this.postService.create(postData)
      .subscribe(res => {
        console.log(res);
        this.postList.push(postData);
        // console.log('new Post Inserter');
        this.newDataInserted = true;
        setTimeout(() => {
          this.newDataInserted = false;
        }, 2000);
      });
  }

}

