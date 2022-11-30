import { createAction, props } from "@ngrx/store";
import { ISession } from "src/app/shared/models/session.model";

export const loadAllQuarters = createAction(
  '[Quarters] Load All Quarters'
);

export const loadQuarter = createAction(
  '[Quarters] Load Quarter',
  props<{ id: number }>()
);

