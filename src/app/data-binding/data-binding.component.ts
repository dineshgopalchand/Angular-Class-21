import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  title = 'Data Binding';
  content = '<p>data-binding works!</p>';
  imgSrc = 'https://dummyimage.com/350x200/000/fff';

  tableTitle = 'Some Dummy Data';
  colSpan = 2;
  rowSpan = 2;

  isValid = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(): void {
    this.isValid = !this.isValid;
  }

}
