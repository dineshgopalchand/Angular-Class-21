import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './pipes/summary.pipe';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListingDirective } from './directives/listing.directive';



@NgModule({
  declarations: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    ListingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    ListingDirective
  ]
})
export class SharedModule { }
