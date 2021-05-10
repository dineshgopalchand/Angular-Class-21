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
      id: 1,
      name: 'Dummy Image - 300x200',
      url: 'https://dummyimage.com/300x200/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!',
      like: true,
      likecount: 2
    },
    {
      id: 2,
      name: 'Dummy Image - 200x200',
      url: 'https://dummyimage.com/200x200/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!',
      like: false,
      likecount: 2
    },
    {
      id: 3,
      name: 'Dummy Image - 200x200',
      url: 'https://dummyimage.com/200x300/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!',
      like: true,
      likecount: 6
    },
    {
      id: 4,
      name: 'Dummy Image - 300x300',
      url: 'https://dummyimage.com/300x300/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!',
      like: false,
      likecount: 16
    },
    {
      id: 5,
      name: 'Dummy Image - 300x250',
      url: 'https://dummyimage.com/300x250/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!',
      like: true,
      likecount: 11
    },
    {
      id: 6,
      name: 'Dummy Image - 350x200',
      url: 'https://dummyimage.com/350x200/000/fff',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti exercitationem. Error quibusdam enim at nobis sunt quam laudantium fugiat!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  updateImageDetails(imgDetail: ImageDetail): void {
    // API operation will go here
    const indexVal = this.imageList.findIndex((imgDetails) => {
      return imgDetails.id === imgDetail.id;
    });
    // console.log(indexVal);
    this.imageList.splice(indexVal, 1, imgDetail);
    console.log(this.imageList);
  }

}
