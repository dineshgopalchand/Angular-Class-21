import { Injectable } from '@angular/core';

@Injectable()
export class StudentDetailsService {

  studentDetails = {
    name: 'Dinesh GoPal chand',
    title: 'Angular COurse',
    rating: 4.75232,
    studentsinBatch: 2000,
    price: 100000,
    releaseDate: new Date(2018, 19, 10),
    address: {
      city: 'banGalore',
      state: 'ka',
      country: 'INDIA',
    }
  };

  constructor() { }
}
