import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';
import { PipeComponent } from './pipe.component';
import { PredefinedPipeComponent } from './predefined-pipe/predefined-pipe.component';
import { StudentDetailsService } from './service/student-details.service';



@NgModule({
  declarations: [
    PipeComponent,
    PredefinedPipeComponent,
    CustomPipeDemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PipeComponent
  ],
  providers: [
    StudentDetailsService
  ]
})
export class PipeModule { }
