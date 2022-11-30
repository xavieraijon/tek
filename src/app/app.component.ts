/* eslint-disable @ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeCa from '@angular/common/locales/ca';
import localeEs from '@angular/common/locales/es';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SidebarSelectors } from './core/store/sidebar';
import { RootState } from './core/store';
import { SessionPageActions } from './core/store/sessions';
import { QuarterActions } from './core/store/quarters';
import { BeforeScreenSelectors } from './core/store/before-screen';

@Component({
  selector: 'tkm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public handleSidebar$!: Observable<boolean>;
  public handleBeforeScreen$!: Observable<boolean>;

  constructor(private translate: TranslateService, private store: Store<RootState>) { }

  ngOnInit(): void {
    registerLocaleData(localeCa, 'ca');
    registerLocaleData(localeEs, 'es');
    this.translate.addLangs(['es', 'ca']);
    this.translate.use('es');

    this.store.dispatch(SessionPageActions.loadAllSessions());
    this.store.dispatch(QuarterActions.loadAllQuarters());

    this.handleSidebar$ = this.store.select(SidebarSelectors.selectHandleSidebar);
    this.handleBeforeScreen$ = this.store.select(BeforeScreenSelectors.selectHandleBeforeScreen);
  }
}
