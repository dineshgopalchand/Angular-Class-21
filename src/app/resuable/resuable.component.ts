import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resuable',
  templateUrl: './resuable.component.html',
  styleUrls: ['./resuable.component.scss']
})
export class ResuableComponent implements OnInit {
  @Input() imageDetail: ImageDetail = {} as ImageDetail;
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

}

export interface ImageDetail {
  name: string;
  url: string;
  details: string;
  like?: boolean;
  likecount?: number;
}
