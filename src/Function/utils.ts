import { DeadLine } from '../types';

export function generateID() {
  const code = Math.random().toString(32).substring(2);
  return code;
}

export function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  return `${year}/${month}/${day}/${hour}:${minute}:${second}`;
}

export function toObjectDeadline(deadline: string) {
  const [year, month, day] = deadline.split('-').map(Number);
  const obj = {
    year,
    month,
    day,
  };
  return obj;
}

export function toStringDeadline(deadline: DeadLine) {
  const str = Object.values(deadline)
  .map((x) => x.toString().padStart(2, '0'))
  .join('-');
  console.log(str)
  return str;
}
