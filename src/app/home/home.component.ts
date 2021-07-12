import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hidden = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }

}
