import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../service/student-details.service';

@Component({
  selector: 'app-predefined-pipe',
  templateUrl: './predefined-pipe.component.html',
  styleUrls: ['./predefined-pipe.component.scss']
})
export class PredefinedPipeComponent implements OnInit {

  constructor(private studentDetailsService: StudentDetailsService) { }

  ngOnInit(): void {
  }

  get studentDetails(): any {
    return this.studentDetailsService.studentDetails;
  }

}
