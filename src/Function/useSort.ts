import { Todo, SortType, FilterType } from '../types';
import { useTodos } from './useTodos';
import { ref, computed } from 'vue';
const { todos } = useTodos();

export function useSort() {
  const sortType = ref<SortType>('Text');
  const sortOrder = ref(1);
  const filterType = ref<FilterType>('全');

  function setSortType(type: SortType) {
    sortType.value = type;
  }

  function setSortOrder(order: number) {
    sortOrder.value = -order;
  }

  const filterList = computed(() => {
    let list = todos.value.map((x: Todo) => x);
    console.log(todos.value);
    if (filterType.value == '全') return list;

    if (filterType.value == '済') {
      list = list.filter((x) => x.status == true);
    } else if (filterType.value == '未') {
      list = list.filter((x) => x.status == false);
    }
    return list;
  });

  const sortList = computed(() => {
    let list = filterList.value.map((x) => x);
    textSort(list);
    return list;
  });

  function textSort(list: Todo[]) {
    console.log(list);
    list.sort();
    console.log(list);
  }

  return { sortList };
}
