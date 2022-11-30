import { createSelector } from "@ngrx/store";
import { RootState } from "..";

export const selectSidebarState = (state: RootState) => state.sidebar

export const selectHandleSidebar = createSelector(
  selectSidebarState,
  (state) => state.handleSidebar
);