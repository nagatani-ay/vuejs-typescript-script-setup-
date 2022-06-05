import { Todo } from '../types';
import { getTime, toObjectDeadline, toStringDeadline } from './utils';
import { ref, onMounted, watch, computed } from 'vue';

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
    return todos.value.findIndex((e) => e.code == target);
  }

  function editData(item: Todo, text: string, deadline: string) {
    if (text === '' || deadline === '') {
      alert('値を入力してください');
    } else {
      const newData = {
        code: item.code,
        text: text,
        status: item.status,
        time: getTime(),
        deadline: toObjectDeadline(deadline),
      };
      return newData;
    }
  }

  const calendarItems = computed(() => {
    const list: { [key: string]: Todo[] } = {};
    const keys = new Set(todos.value.map((x) => toStringDeadline(x.deadline)));

    for (let key of keys) {
      list[key] = [];
    }
    todos.value.forEach((todo: Todo) => {
      list[toStringDeadline(todo.deadline)].push(todo);
    });

    return list;
  });

  // Mount時ローカルストレージからデータをロード
  onMounted(() => {
    if (localStorage.getItem('todolist') != null) {
      todos.value = JSON.parse(localStorage.getItem('todolist') as string);
    }
  });
  // 変更検知でローカルストレージにデータをセーブ
  watch(
    () => todos.value,
    (list, prevList) => {
      if (list != null) {
        localStorage.setItem('todolist', JSON.stringify(list));
      }
    },
    { deep: true }
  );

  return { todos, add, edit, checked, remove, calendarItems, editData };
}
