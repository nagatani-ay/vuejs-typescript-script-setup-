import { Todo } from '../types';
import {
  getTime,
  toObjectDeadline,
  toStringDeadline,
  generateID,
} from './utils';
import { ref, onMounted, watch, computed } from 'vue';

const todos = ref<Todo[]>([]);

export function getTodos() {
  return todos;
}

// index特定
function getIndex(target: string) {
  return todos.value.findIndex((e) => e.code == target);
}

export function useTodos() {
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
    const item = todos.value[index];
    const result = {
      code: item.code,
      text: item.text,
      status: !item.status,
      time: getTime(),
      deadline: item.deadline,
    };

    todos.value.splice(index, 1, result);
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
  //編集データ
  function editData(item: Todo, text: string, deadline: string) {
    const newData = {
      code: item.code,
      text: text,
      status: item.status,
      time: getTime(),
      deadline: toObjectDeadline(deadline),
    };
    return newData;
  }
  // 新規データ
  function createNewData(text: string, deadline: string) {
    const newData = {
      code: generateID(),
      text: text,
      status: false,
      time: getTime(),
      deadline: toObjectDeadline(deadline),
    };
    return newData;
  }
  // Mount時ローカルストレージからデータをロード
  onMounted(() => {
    try{
      todos.value = JSON.parse(localStorage.getItem('todolist') as string);
    }catch(e){
      todos.value=[];
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

  return {
    add,
    edit,
    checked,
    remove,
    editData,
    calendarItems,
    createNewData,
  };
}
