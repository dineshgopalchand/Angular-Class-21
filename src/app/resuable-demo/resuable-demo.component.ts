import { Component, OnInit } from '@angular/core';
import { ImageDetail } from '../resuable/resuable.component';

@Component({
  selector: 'app-resuable-demo',
  templateUrl: './resuable-demo.component.html',
  styleUrls: ['./resuable-demo.component.scss']
})
export class ResuableDemoComponent implements OnInit {
  imageList: ImageDetail[] = [
    {
      name: 'Dummy Image - 300x200',
      url: 'https://dummyimage.com/300x200/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    },
    {
      name: 'Dummy Image - 200x200',
      url: 'https://dummyimage.com/200x200/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    },
    {
      name: 'Dummy Image - 200x200',
      url: 'https://dummyimage.com/200x300/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    },
    {
      name: 'Dummy Image - 300x300',
      url: 'https://dummyimage.com/300x300/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    },
    {
      name: 'Dummy Image - 300x250',
      url: 'https://dummyimage.com/300x250/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    },
    {
      name: 'Dummy Image - 350x200',
      url: 'https://dummyimage.com/350x200/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
