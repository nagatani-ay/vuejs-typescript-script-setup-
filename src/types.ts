export type BaseDate = {
  year: number;
  month: number;
  day: number;
};

export type Todo = {
  code: string;
  text: string;
  status: boolean;
  time: string;
  deadline: DeadLine;
};

export type DeadLine = BaseDate;

export type Calendar = {
  date: BaseDate;
  dayofweek: number;
};

export type CalendarItemArray = {
  key:

//template literal type
};

export type SortType = 'Text' | 'Status' | 'Time' | 'Deadline';

export type FilterType = '全' | '済' | '未';

export type OrderType = 'ascend' | 'decend';
