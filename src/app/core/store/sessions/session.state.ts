import { ISession } from "src/app/shared/models/session.model";

export interface SessionState {
  sessions: ISession[];
  quarterId: number;
}