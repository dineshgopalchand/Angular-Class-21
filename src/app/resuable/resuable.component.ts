import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeValue } from '../like/like.component';

@Component({
  selector: 'app-resuable',
  templateUrl: './resuable.component.html',
  styleUrls: ['./resuable.component.scss']
})
export class ResuableComponent implements OnInit {
  @Input() imageDetail: ImageDetail = {} as ImageDetail;
  @Output() updateImgDetails = new EventEmitter();
  // @Input() img = '';

  imageUrl = '';
  title = '';
  details = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.imageDetail);
    this.imageUrl = this.imageDetail.url;
    this.title = this.imageDetail.name;
    this.details = this.imageDetail.details;
    // console.log(this.img);

  }
  onClick(): void {
    console.log('button was Clicked');
  }
  get isLike(): boolean {
    return this.imageDetail.like || false;
  }
  get count(): number {
    return this.imageDetail.likecount || 0;
  }
  updateLike(likeVal: LikeValue): void {
    console.log(likeVal);
    const imgDetails = this.imageDetail;
    imgDetails.like = likeVal.like;
    imgDetails.likecount = likeVal.count;
    console.log(imgDetails);
    this.updateImgDetails.emit(imgDetails);
  }

}

export interface ImageDetail {
  id: number;
  name: string;
  url: string;
  details: string;
  like?: boolean;
  likecount?: number;
}
