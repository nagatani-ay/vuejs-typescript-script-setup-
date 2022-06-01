import { Todo } from '../types';

export function useTodos() {
  function add(todos: Todo[], data: Todo) {
    console.log(todos);
  }
  function remove() {}

  return { add, remove };
}
