import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { RootState } from 'src/app/core/store';
import { SidebarActions } from 'src/app/core/store/sidebar';

@Component({
  selector: 'tkm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  public faArrowLeft = faArrowLeft;
  public configForm!: FormGroup;
  public currentLanguage!: string;

  constructor(private store: Store<RootState>, private fb: FormBuilder, private translate: TranslateService) { }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
    console.log(this.currentLanguage)
    this.configForm = this.initForm();
  }

  closeSidebar(event: MouseEvent): void {
    event.preventDefault();
    this.store.dispatch(SidebarActions.hideSidebar());
  }

  onSubmit(): void {
    this.translate.use(this.configForm.value.language)
    this.store.dispatch(SidebarActions.hideSidebar());
  }

  initForm(): FormGroup {
    return this.fb.group({
      language: [this.currentLanguage],
      course: ['ep1'],
    });
  }

}
