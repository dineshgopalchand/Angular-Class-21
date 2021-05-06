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
    },
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat eum consequatur repellendus quae pariatur iusto, delectus dolor veniam obcaecati, perferendis doloremque. Quis, quasi reprehenderit? Vitae excepturi debitis distinctio cum blanditiis, corrupti sapiente earum itaque. Autem consequatur recusandae possimus impedit, ab harum, nulla nihil libero architecto, molestiae non. Unde non eligendi blanditiis placeat aut dolorem ab tempore ratione sit tempora officiis amet aliquam expedita, vero quas pariatur commodi! Et ipsum natus doloremque corporis dolores eaque omnis. Consequuntur, vitae perferendis ab magni dolorem fugiat doloribus incidunt eum facilis at ad corrupti quae nobis quis, est amet exercitationem nihil qui! Neque molestias impedit veritatis voluptatibus mollitia temporibus, voluptates nesciunt ullam natus maiores reprehenderit ea, iste, cum aut. Aperiam eaque fugiat quis non laudantium ipsa placeat pariatur doloribus, id repudiandae quidem rem reprehenderit voluptatibus dolore unde. Dignissimos, nobis aspernatur repellendus autem officiis, pariatur molestiae ex incidunt modi nam velit error ea temporibus neque et. Reprehenderit accusantium mollitia necessitatibus quidem in ducimus, sapiente tenetur hic quos non! Ad inventore odio praesentium explicabo quas quaerat alias dolorum sit aliquid illo hic, asperiores, facilis ratione quia reiciendis itaque. Quos voluptatem sunt natus sint cumque aperiam nemo consectetur, soluta modi laborum perspiciatis et sapiente harum repellat tempora. read more'
  };

  constructor() { }
}
