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
