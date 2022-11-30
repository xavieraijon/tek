import { createAction, props } from '@ngrx/store';
import { ISession } from 'src/app/shared/models/session.model';

export const showBeforeScreen = createAction(
  '[Before Screen] Show BeforeScreen',
  props<{ session: ISession }>()
);

export const hideBeforeScreen = createAction('[Before Screen] Hide BeforeScreen');