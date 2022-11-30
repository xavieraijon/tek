import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionPageComponent } from './pages/session-page/session-page.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuarterModule } from 'src/app/shared/components/quarter/quarter.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SessionPageComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    CardModule,
    QuarterModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class SessionModule { }
