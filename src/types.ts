export type Todo = {
  code: string;
  text: string;
  status: boolean;
  time: string;
  deadline: { year: number; month: number; day: number };
};

export type DeadLine = {
  year: number;
  month: number;
  day: number;
};

export type Calendar = {
  date: { year: number; month: number; day: number };
  dayofweek: number;
};

export enum SortType {
  Text,
  Status,
  Time,
  Deadline,
}

export enum FilterType {
  全,
  済,
  未,
}

export enum OrderType {
  ascend,
  decend,
}
