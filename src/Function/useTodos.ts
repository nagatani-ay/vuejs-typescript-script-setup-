import { Todo } from '../types';
import { getTime } from './utils';

export function useTodos() {
  // 追加
  function add(list: Todo[], item: Todo) {
    console.log(list);
    console.log(item);
    list.push(item);
  }
  // 編集
  function edit(list: Todo[], item: Todo) {
    list.splice(getIndex(list, item.code), 1, item);
  }

  // 削除
  function remove(list: Todo[], target: string) {
    list.splice(getIndex(list, target), 1);
  }

  // チェック
  function checked(list: Todo[], target: string) {
    const index = getIndex(list, target);
    list[index].status = !list[index].status;
    list[index].time = getTime();
  }

  return { add, edit, checked, remove };
}
// index特定
function getIndex(list: Todo[], target: string) {
  const codes = list.map((x: Todo) => x.code);
  const index = codes.indexOf(target);
  // findIndex((element)
  return index;
}
