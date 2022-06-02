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

export type SortType = 'Text' | 'Status' | 'Time' | 'Deadline';

export type FilterType = '全' | '済' | '未';

export type OrderType = 'ascend' | 'decend';
