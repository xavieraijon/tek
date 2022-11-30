import { beforeScreenReducer } from "./before-screen";
import { BeforeScreenState } from "./before-screen/before-screen.state";
import { quarterReducer } from "./quarters/quarter.reducer";
import { QuarterState } from "./quarters/quarter.state";
import { sessionReducer } from "./sessions";
import { SessionState } from "./sessions/session.state";
import { sidebarReducer } from "./sidebar";
import { SidebarState } from "./sidebar/sidebar.state";


export interface RootState {
  sessions: SessionState,
  sidebar: SidebarState,
  quarters: QuarterState,
  beforeScreen: BeforeScreenState
}

export const rootReducer = {
  sessions: sessionReducer,
  sidebar: sidebarReducer,
  quarters: quarterReducer,
  beforeScreen: beforeScreenReducer
}