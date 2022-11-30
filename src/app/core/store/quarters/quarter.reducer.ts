/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createReducer, on } from "@ngrx/store";
import { quarters } from "src/assets/data/data";
import { QuarterActions } from ".";
import { QuarterState } from "./quarter.state";

export const initialState: QuarterState = {
  quarters: [],
};

export const quarterReducer = createReducer(
  initialState,
  on(QuarterActions.loadAllQuarters, (state) => ({
    ...state,
    quarters: [...quarters],
  })),

  on(QuarterActions.loadQuarter, (state, { id }) => ({
    ...state,
    quarter: state.quarters.find((quarter) => quarter.id === id)
  }))
);
