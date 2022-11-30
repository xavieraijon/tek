/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createReducer, on } from "@ngrx/store";
import { SidebarActions } from ".";
import { SidebarState } from "./sidebar.state";

export const initialState: SidebarState = {
  handleSidebar: false,
};

export const sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.showSidebar, (state) => ({
    ...state,
    handleSidebar: true,
  })),
  on(SidebarActions.hideSidebar, (state) => ({
    ...state,
    handleSidebar: false,
  }))
);
