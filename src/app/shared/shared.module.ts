import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SummaryPipe } from './pipes/summary.pipe';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListingDirective } from './directives/listing.directive';
import { NameValidationDirective } from './directives/name-validation.directive';



@NgModule({
  declarations: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    ListingDirective,
    NameValidationDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe
  ],
  exports: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    ListingDirective,
    NameValidationDirective
  ]
})
export class SharedModule { }
