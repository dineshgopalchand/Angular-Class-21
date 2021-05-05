import { Component, OnInit } from '@angular/core';
import { defaultFormat } from 'src/app/common/config';
import { StudentDetailsService } from '../service/student-details.service';


@Component({
  selector: 'app-predefined-pipe',
  templateUrl: './predefined-pipe.component.html',
  styleUrls: ['./predefined-pipe.component.scss']
})
export class PredefinedPipeComponent implements OnInit {
  dateFormat = defaultFormat.date;

  constructor(private studentDetailsService: StudentDetailsService) { }

  ngOnInit(): void {
  }

  get studentDetails(): any {
    return this.studentDetailsService.studentDetails;
  }

}
