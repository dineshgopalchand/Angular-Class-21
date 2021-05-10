import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() isLiked = false;
  @Input() count = 0;

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
      count: this.count
    };
    this.likeUpdate.emit(
      value
    );
  }

}

export interface LikeValue {
  like: boolean;
  count: number;
}
