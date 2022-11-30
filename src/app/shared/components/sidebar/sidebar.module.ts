import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
