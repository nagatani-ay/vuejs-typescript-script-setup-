import { Todo } from '../types';
import { getTime } from './utils';
import { ref, onMounted, watch } from 'vue';

export function useTodos() {
  const todos = ref<Todo[]>([]);
  // 追加
  function add(item: Todo) {
    todos.value.push(item);
  }
  // 編集
  function edit(item: Todo) {
    todos.value.splice(getIndex(item.code), 1, item);
  }

  // 削除
  function remove(target: string) {
    todos.value.splice(getIndex(target), 1);
  }

  // チェック
  function checked(target: string) {
    const index = getIndex(target);
    todos.value[index].status = !todos.value[index].status;
    todos.value[index].time = getTime();
  }

  // index特定
  function getIndex(target: string) {
    const codes = todos.value.map((x: Todo) => x.code);
    const index = codes.indexOf(target);
    // findIndex((element)
    return index;
  }

  onMounted(() => {
    if (localStorage.getItem('todolist') != null) {
      todos.value = JSON.parse(localStorage.getItem('todolist') as string);
    }
  });

  watch(
    () => todos.value,
    (list, prevList) => {
      if (list != null) {
        localStorage.setItem('todolist', JSON.stringify(list));
      }
    },
    { deep: true }
  );

  return { todos, add, edit, checked, remove };
}
