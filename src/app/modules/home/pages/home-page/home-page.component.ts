import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/app/core/store';
import { QuarterSelectors } from 'src/app/core/store/quarters';
import { IQuarter } from 'src/app/shared/models/session.model';
import { quarters } from 'src/assets/data/data';

@Component({
  selector: 'tkm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public quarters: IQuarter[] = quarters;
  public quarters$!: Observable<IQuarter[]>;

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
    this.quarters$ = this.store.select(QuarterSelectors.selectAllQuarters);
  }

}
