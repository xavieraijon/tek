import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Variants } from 'src/app/config/enums';
import { RootState } from 'src/app/core/store';
import { BeforeScreenActions } from 'src/app/core/store/before-screen';
import { SessionSelectors } from 'src/app/core/store/sessions';
import { IQuarter, ISession } from 'src/app/shared/models/session.model';

@Component({
  selector: 'tkm-active-session',
  templateUrl: './active-session.component.html',
  styleUrls: ['./active-session.component.scss']
})
export class ActiveSessionComponent implements OnInit, OnDestroy {
  public variants = Variants;
  public faPlay = faPlay;
  public faRandom = faRandom;
  public faShareSquare = faShareSquare;
  public nextSession!: ISession;
  public nextSessionFromCurrent!: ISession;
  public currentSession!: ISession;
  public currentQuarter!: IQuarter;
  public randomSession!: ISession;
  public current: any;
  private destroy$ = new Subject<void>();

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
    this.store.select(SessionSelectors.selectCurrentSessionWithQuarter)
      .pipe(takeUntil(this.destroy$))
      .subscribe((object) => {
        this.current = object;
      });
    this.store.select(SessionSelectors.selectNextSessionFromCurrent)
      .pipe(takeUntil(this.destroy$))
      .subscribe((session: ISession | undefined) => {
        this.nextSessionFromCurrent = session!;
      });
    this.store.select(SessionSelectors.selectNextSession)
      .pipe(takeUntil(this.destroy$))
      .subscribe((session: ISession | undefined) => {
        this.nextSession = session!;
      });
    this.store.select(SessionSelectors.selectRandomSession)
      .pipe(takeUntil(this.destroy$))
      .subscribe((session: ISession | undefined) => {
        this.randomSession = session!;
      });
  }

  showNextSessionFromCurrent(): void {
    this.store.dispatch(BeforeScreenActions.showBeforeScreen({ session: this.nextSessionFromCurrent }));
  }

  showNextSession(): void {
    this.store.dispatch(BeforeScreenActions.showBeforeScreen({ session: this.nextSession }));
  }

  showRandomSession(): void {
    this.store.dispatch(BeforeScreenActions.showBeforeScreen({ session: this.randomSession }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
