import { Component, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faTh } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Variants } from 'src/app/config/enums';
import { SidebarActions } from '../store/sidebar';

@Component({
  selector: 'tkm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faTh = faTh;
  public faSun = faSun;
  public faSignOutAlt = faSignOutAlt;
  public variant = Variants;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  handleShowSidebar(): void {
    this.store.dispatch(SidebarActions.showSidebar());
  }

}
