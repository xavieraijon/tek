import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuarterComponent } from './quarter.component';
import { CardModule } from '../card/card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    QuarterComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    QuarterComponent
  ]
})
export class QuarterModule { }
