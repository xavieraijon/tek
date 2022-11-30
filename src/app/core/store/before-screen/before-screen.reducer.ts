/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createReducer, on } from "@ngrx/store";
import { BeforeScreenActions } from ".";
import { BeforeScreenState } from "./before-screen.state";

export const initialState: BeforeScreenState = {
  handleBeforeScreen: false,
  session: {
    id: 0,
    quarterId: 0,
    title: "",
    viewed: false,
    current: false,
  }
};

export const beforeScreenReducer = createReducer(
  initialState,
  on(BeforeScreenActions.showBeforeScreen, (state, action) => ({
    ...state,
    handleBeforeScreen: true,
    session: action.session
  })),
  on(BeforeScreenActions.hideBeforeScreen, (state) => ({
    ...state,
    handleBeforeScreen: false
  }))
);
