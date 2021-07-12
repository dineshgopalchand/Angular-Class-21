import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SummaryPipe } from './pipes/summary.pipe';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListingDirective } from './directives/listing.directive';
import { NameValidationDirective } from './directives/name-validation.directive';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AllMaterialModule } from './all-material.module';



@NgModule({
  declarations: [
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    ListingDirective,
    NameValidationDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    AllMaterialModule
  ],
  providers: [
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe
  ],
  exports: [
    AllMaterialModule,
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    ListingDirective,
    NameValidationDirective,
    NgxPaginationModule
  ]
})
export class SharedModule { }
