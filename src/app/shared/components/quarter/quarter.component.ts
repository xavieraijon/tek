import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/app/core/store';
import { SessionSelectors } from 'src/app/core/store/sessions';
import { IQuarter } from '../../models/session.model';

@Component({
  selector: 'tkm-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.scss']
})
export class QuarterComponent implements OnInit {
  @Input() quarter!: IQuarter;
  @Input() hasLinkable: boolean = false;
  public progress!: number;
  public faCheck = faCheck;

  public quarterSessionsNumber$!: Observable<number>;
  public quarterViewedSessionsNumber$!: Observable<number>;

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
    this.quarterSessionsNumber$ = this.store.select(SessionSelectors.selectTotalSessionsByQuarter({ quarterId: this.quarter.id }));
    this.quarterViewedSessionsNumber$ = this.store.select(SessionSelectors.selectTotalViewedSessionsByQuarter({ quarterId: this.quarter.id }));

    this.quarterViewedSessionsNumber$.subscribe((viewedSessionsNumber: number) => {
      // This calc is only for demo purposes based on 10 sessions per quarter
      this.progress = (viewedSessionsNumber * 3.6) * 10;
    });
  }

}
