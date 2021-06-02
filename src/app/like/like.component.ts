import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-like',
  // template: '<i class="fa fa-thumbs-up" [class.liked]="isLiked" [class.unliked]="!isLiked" (click)="updateLikeStatus()"></i>' +
  //   '<span class="ml-4">{{count}}</span>',
  // template: '<i class="fa fa-thumbs-up" [class.liked]="isLiked" [class.unliked]="!isLiked" (click)="updateLikeStatus()"></i>\
  //   <span class="ml-4">{{count}}</span>',
  // template: `<i class="fa fa-thumbs-up" [class.liked]="isLiked" [class.unliked]="!isLiked" (click)="updateLikeStatus()"></i>
  //   <span class="ml-4">{{count}}</span>`,
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  // styles: ['span{color:red}'],
})
export class LikeComponent implements OnInit {

  @Input() isLiked = false;
  @Input() count = 0;
  @Input() idVal = '';

  @Output() likeUpdate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  updateLikeStatus(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.count++;
    } else {
      this.count--;
    }
    const value: LikeValue = {
      like: this.isLiked,
      count: this.count,
      id: this.idVal
    };
    this.likeUpdate.emit(
      value
    );
  }

}

export interface LikeValue {
  like: boolean;
  count: number;
  id: string;
}
