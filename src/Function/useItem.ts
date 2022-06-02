import { getTime, toObjectDeadline } from './utils';
import { Todo } from '../types';

export function useItem() {
  function editData(todo: Todo, text: string, deadline: string) {
    if (text === '' || deadline === '') {
      alert('値を入力してください');
    } else {
      const newData = {
        code: todo.code,
        text: text,
        status: todo.status,
        time: getTime(),
        deadline: toObjectDeadline(deadline),
      };
      return newData;
    }
  }
  return { editData };
}
