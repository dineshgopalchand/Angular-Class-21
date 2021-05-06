import { Component, OnInit } from '@angular/core';
import { summaryArg } from 'src/app/shared/pipes/summary.pipe';
import { StudentDetailsService } from '../service/student-details.service';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.scss']
})
export class CustomPipeDemoComponent implements OnInit {
  summaryArgs: summaryArg = {};

  constructor(private studentDetailsService: StudentDetailsService) {
  }

  ngOnInit(): void {
    this.summaryArgs = { expand: true, maxlength: 100 };
  }

  get details(): string {
    return this.studentDetailsService.studentDetails.details;
  }

}
