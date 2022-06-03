import { useTodos } from './useTodos';
import { toStringDeadline } from './utils';
import { Todo } from '../types';
import { computed, watch } from 'vue';
export function useCalendar() {
  const { todos } = useTodos();

  const calendarItems = computed(() => {
    const list: { [key: string]: Todo[] } = {};
    const keys = new Set(todos.value.map((x) => toStringDeadline(x.deadline)));

    for (let key of keys) {
      list[key] = [];
    }
    todos.value.forEach((todo: Todo) => {
      list[toStringDeadline(todo.deadline)].push(todo);
    });

    console.log(list);

    return list;
  });

  return { calendarItems };
}
