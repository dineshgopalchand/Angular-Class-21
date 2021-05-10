import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() isLiked = false;
  @Input() count = 0;
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
  }

}
