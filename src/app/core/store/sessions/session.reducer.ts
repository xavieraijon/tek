/* eslint-disable @ngrx/on-function-explicit-return-type */
import { ISession } from "src/app/shared/models/session.model";
import { createReducer, on } from "@ngrx/store";
import { SessionPageActions } from ".";
import { sessions } from "src/assets/data/data";
import { SessionState } from "./session.state";

export const initialState: SessionState = {
  sessions: [],
  quarterId: 0
};

export const sessionReducer = createReducer(
  initialState,

  on(SessionPageActions.loadAllSessions, (state) => ({
    ...state,
    sessions: sessions

  })),

  on(SessionPageActions.loadSessionsByQuarter, (state, { quarterId }) => ({
    ...state,
    quarterId,
    sessions: sessions.filter(
      (session) => session.quarterId === quarterId
    )
  })),

  on(SessionPageActions.loadCurrentSession, (state, { current }) => ({
    ...state,
    sessions: sessions.filter((session) => session.current === current)
  })),

  on(SessionPageActions.markAsViewed, (state, action) => ({
    ...state,
    sessions: state.sessions.map(
      (session) => session.id === action.session.id ? { ...session, viewed: true } : session
    )
  })),

  on(SessionPageActions.markAsCurrent, (state, action) => ({
    ...state,
    sessions: state.sessions.map(
      (session) => {
        session = { ...session, current: false };
        return session.id === action.session.id ? { ...session, current: true } : session
      }
    )
  })),
);
