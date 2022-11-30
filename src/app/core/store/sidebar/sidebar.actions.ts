import { createAction, props } from '@ngrx/store';
import { ISession } from 'src/app/shared/models/session.model';

export const showSidebar = createAction('[Sidebar] Show Sidebar');
export const hideSidebar = createAction('[Sidebar] Hide Sidebar');