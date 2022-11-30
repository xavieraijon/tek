import { createSelector, select } from "@ngrx/store";
import { RootState } from "..";

export const selectQuartersState = (state: RootState) => state.quarters

export const selectAllQuarters = createSelector(
  selectQuartersState,
  (state) => state.quarters
);

export const selectQuarterById = (props: { id: number }) => createSelector(
  selectQuartersState,
  selectAllQuarters,
  (state) => state.quarters.find((quarter) => quarter.id === props.id)
);


