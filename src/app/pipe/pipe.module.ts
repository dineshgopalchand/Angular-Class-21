import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { PredefinedPipeComponent } from './predefined-pipe/predefined-pipe.component';
import { StudentDetailsService } from './service/student-details.service';



@NgModule({
  declarations: [
    PipeComponent,
    PredefinedPipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeComponent
  ],
  providers: [
    StudentDetailsService
  ]
})
export class PipeModule { }
