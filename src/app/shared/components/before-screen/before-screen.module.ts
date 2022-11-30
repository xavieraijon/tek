import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeScreenComponent } from './before-screen.component';
import { ButtonModule } from '../button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BeforeScreenComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    BeforeScreenComponent
  ]
})
export class BeforeStartModule { }
