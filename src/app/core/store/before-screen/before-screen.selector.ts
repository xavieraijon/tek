import { createSelector } from "@ngrx/store";
import { RootState } from "..";

export const selectBeforeScreenState = (state: RootState) => state.beforeScreen

export const selectHandleBeforeScreen = createSelector(
  selectBeforeScreenState,
  (state) => state.handleBeforeScreen
);

export const selectSession = createSelector(
  selectBeforeScreenState,
  (state) => state.session
);

