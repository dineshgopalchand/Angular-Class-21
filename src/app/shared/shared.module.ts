import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './pipes/summary.pipe';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
