import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ActiveSessionComponent } from './components/active-session/active-session.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { QuarterModule } from 'src/app/shared/components/quarter/quarter.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomePageComponent,
    ActiveSessionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    FontAwesomeModule,
    CardModule,
    QuarterModule,
    TranslateModule
  ]
})
export class HomeModule { }
