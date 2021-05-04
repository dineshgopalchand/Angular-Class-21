import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  firstName = '';
  constructor() { }

  ngOnInit(): void {
  }
  updateFirstName(fname: HTMLInputElement): void {
    this.firstName = fname.value;
  }
  changeUpperCase(): void {
    this.firstName = this.firstName.toUpperCase();
  }

}
