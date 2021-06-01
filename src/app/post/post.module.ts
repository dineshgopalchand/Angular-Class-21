import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { HttpClientModule } from '@angular/common/http';
import { LikeModule } from '../like/like.module';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LikeModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
