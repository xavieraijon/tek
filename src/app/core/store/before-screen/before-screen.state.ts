import { ISession } from "src/app/shared/models/session.model";

export interface BeforeScreenState {
  handleBeforeScreen: boolean;
  session: ISession;
}