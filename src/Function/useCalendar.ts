import { useTodos } from './useTodos';
import { toStringDeadline } from './utils';
import { Todo } from '../types';
import { computed } from 'vue';
export function useCalendar() {
  const { todos } = useTodos();

  const calendarItems = computed(() => {
    const calendarItems: { [key: string]: Todo[] } = {};

    // 日付をキーとしたTodoオブジェクトのリストを生成
    todos.value.forEach((todo: Todo, i: number) => {
      const key: string = toStringDeadline(todo.deadline);
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
