import { useTodos } from './useTodos';
import { Todo } from '../types';
import { computed } from 'vue';
export function useCalendar() {
  const { todos } = useTodos();

  const calendarItems = computed(() => {
    const calendarItems = <Todo[]>{};

    todos.value.forEach((todo: Todo, i: number) => {
      const key = Object.values(todo.deadline).join('-');
      if (!calendarItems[key]) {
        calendarItems[key] = [];
      }
      calendarItems[key].push({
        code: todo.code,
        text: todo.text,
        status: todo.status,
        time: todo.time,
        deadline: todo.deadline,
      });
    });
    return calendarItems;
  });
  return { calendarItems };
}
