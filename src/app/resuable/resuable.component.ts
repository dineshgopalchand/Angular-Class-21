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
  constructor() { }

  ngOnInit(): void {
    console.log(this.imageDetail);
    this.imageUrl = this.imageDetail.url;
    // console.log(this.img);

  }
  onClick(): void {
    console.log('button was Clicked');
  }

}

export interface ImageDetail {
  name: string;
  url: string;
  details: string;
}
