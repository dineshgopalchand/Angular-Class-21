import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from './service/student-details.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor(private studentDetailsService: StudentDetailsService) { }

  ngOnInit(): void {
  }

}
