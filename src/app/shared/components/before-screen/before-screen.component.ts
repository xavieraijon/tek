import { Component, OnDestroy, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPause, faPlay, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RootState } from 'src/app/core/store';
import { BeforeScreenActions, BeforeScreenSelectors } from 'src/app/core/store/before-screen';
import { SessionPageActions } from 'src/app/core/store/sessions';
import { ISession } from '../../models/session.model';

@Component({
  selector: 'tkm-before-screen',
  templateUrl: './before-screen.component.html',
  styleUrls: ['./before-screen.component.scss']
})
export class BeforeScreenComponent implements OnInit, OnDestroy {
  public faVolumeUp = faVolumeUp;
  public faClock = faClock;
  public faPause = faPause;
  public faPlay = faPlay;
  public session$!: Observable<ISession>;
  public session!: ISession;
  private destroy$ = new Subject<void>();

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
    this.store.select(BeforeScreenSelectors.selectSession)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((session: ISession) => {
        this.session = session;
      });
  }

  markAsViewed(): void {
    this.store.dispatch(SessionPageActions.markAsViewed({ session: this.session }));
    this.markAsCurrent();
    this.closeScreen();
  }

  markAsCurrent(): void {
    this.store.dispatch(SessionPageActions.markAsCurrent({ session: this.session }));
  }

  closeScreen(): void {
    this.store.dispatch(BeforeScreenActions.hideBeforeScreen());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
