import { createSelector } from "@ngrx/store";
import { RootState } from "..";

export const selectSessionsState = (state: RootState) => state.sessions
export const selectQuartersState = (state: RootState) => state.quarters

export const selectSessions = createSelector(
  selectSessionsState,
  (state) => state.sessions
);

export const selectSessionsByQuarter = (props: { quarterId: number }) => createSelector(
  selectSessions,
  (sessions) => sessions.filter((session) => session.quarterId === Number(props.quarterId))
);

export const selectTotalSessionsByQuarter = (props: { quarterId: number }) => createSelector(
  selectSessionsByQuarter({ quarterId: props.quarterId }),
  (sessions) => sessions.length
);

export const selectTotalViewedSessionsByQuarter = (props: { quarterId: number }) => createSelector(
  selectSessionsByQuarter({ quarterId: props.quarterId }),
  (sessions) => sessions.filter((session) => session.viewed).length
);

export const selectCurrentSession = createSelector(
  selectSessions,
  (sessions) => sessions.find((session) => session.current)
);

export const selectCurrentSessionWithQuarter = createSelector(
  selectSessionsState,
  selectQuartersState,
  (sessionsState, quartersState) => {
    const currentSession = sessionsState.sessions.find((session) => session.current);
    const currentQuarter = quartersState.quarters.find((quarter) => quarter.id === currentSession?.quarterId);
    return { session: currentSession, quarter: currentQuarter };
  }
);

export const selectNextSessionFromCurrent = createSelector(
  selectSessions,
  (sessions) => {
    const currentSession = sessions.find((session) => session.current)!;
    const nextSession = sessions.find((session) => session.id === currentSession?.id + 1);
    return nextSession;
  }
);

export const selectNextSession = createSelector(
  selectSessions,
  (sessions) => sessions.find((session) => !session.viewed && !session.current)
);

export const selectRandomSession = createSelector(
  selectSessions,
  (sessions) => sessions[Math.floor(Math.random() * sessions.length)]
);
