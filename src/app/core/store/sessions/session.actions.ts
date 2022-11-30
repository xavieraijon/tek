import { createAction, props } from '@ngrx/store';
import { ISession } from 'src/app/shared/models/session.model';

export const loadAllSessions = createAction(
  '[Session] Load All Sessions'
);

export const loadSessionsByQuarter = createAction(
  '[Session Page] Load sessions by quarter',
  props<{ quarterId: number }>()
);

export const loadCurrentSession = createAction(
  '[Home Page] Get current session',
  props<{ current: boolean }>()
);

export const markAsViewed = createAction(
  '[Session Page] Mark as viewed',
  props<{ session: ISession }>()
);

export const markAsCurrent = createAction(
  '[Session Page] Mark as current',
  props<{ session: ISession }>()
);