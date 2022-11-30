import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { RootState } from 'src/app/core/store';
import { BeforeScreenActions } from 'src/app/core/store/before-screen';
import { QuarterActions, QuarterSelectors } from 'src/app/core/store/quarters';
import { IQuarter, ISession } from 'src/app/shared/models/session.model';
import { SessionPageActions, SessionSelectors } from '../../../../core/store/sessions';

@Component({
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {
  public quarterTitle!: string;
  public quarterId!: number;
  public quarter!: IQuarter;
  public faArrowLeft = faArrowLeft;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public faPlay = faPlay;
  public faRandom = faRandom;
  public sessions$!: Observable<ISession[]>;
  public quarter$!: Observable<IQuarter | undefined>;
  public quarterSessionsNumber$!: Observable<number>;
  public quarterViewedSessionsNumber$!: Observable<number>;
  public totalSessionsViewed: number = 0;

  constructor(private route: ActivatedRoute, private store: Store<RootState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: any) => {
      const { params } = parameters;
      this.quarterId = Number(params.id);
    });

    this.sessions$ = this.store.select(SessionSelectors.selectSessionsByQuarter({ quarterId: this.quarterId }));
    this.quarter$ = this.store.select(QuarterSelectors.selectQuarterById({ id: this.quarterId }));

    this.quarterSessionsNumber$ = this.store.select(SessionSelectors.selectTotalSessionsByQuarter({ quarterId: this.quarterId }));
    this.quarterViewedSessionsNumber$ = this.store.select(SessionSelectors.selectTotalViewedSessionsByQuarter({ quarterId: this.quarterId }));
  }

  showSession(session: ISession): void {
    this.store.dispatch(BeforeScreenActions.showBeforeScreen({ session }));
  }

}
