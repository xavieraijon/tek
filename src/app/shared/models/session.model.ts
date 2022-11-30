export interface ISession {
  id: number;
  title: string;
  viewed: boolean;
  current: boolean;
  quarterId: number;
}

export interface IQuarter {
  id: number;
  label: string;
  title: string;
}