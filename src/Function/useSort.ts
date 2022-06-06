import { Todo, SortType, FilterType, OrderType } from '../types';
import { getTodos } from './useTodos';
import { ref, computed } from 'vue';

const filterType = ref<FilterType>('全');
const sortType = ref<SortType>('Text');
const sortOrder = ref(1);

export function useSort() {
  const todolist = getTodos();
  function setFilterType(type: FilterType) {
    filterType.value = type;
  }
  function setSortType(type: SortType) {
    sortType.value = type;
    console.log(sortType);
  }

  function setSortOrder(order: OrderType) {
    if (order == 'ascend') {
      sortOrder.value = 1;
    } else {
      sortOrder.value = -1;
    }
  }

  const filteredList = computed(() => {
    let list = todolist.value.map((x: Todo) => x);
    if (filterType.value == '全') {
      return list;
    }
    console.log('not all');
    if (filterType.value == '済') {
      list = list.filter((x) => x.status == true);
    } else if (filterType.value == '未') {
      list = list.filter((x) => x.status == false);
    }
    return list;
  });

  const sortedList = computed(() => {
    let list = filteredList.value;
    if (sortType.value == 'Text') {
      list = textSort(list, sortOrder.value);
    } else if (sortType.value === 'Status') {
      list = statusSort(list, sortOrder.value);
    }

    return list;
  });

  function textSort(list: Todo[], order: number) {
    const newList = list.sort((a: Todo, b: Todo) => {
      if (a.text === b.text) {
        //aとbが同じなら
        return a.deadline < b.deadline ? -order : order;
      }
      return a.text < b.text ? -order : order;
    });
    return newList;
  }

  function statusSort(list: Todo[], order: number) {
    const newList = list.sort((a: Todo, b: Todo) => {
      if (a.status === b.status) {
        //aとbが同じなら
        return a.text < b.text ? -order : order;
      }
      return a.status < b.status ? -order : order;
    });
    console.log(newList);
    return newList;
  }

  return { setFilterType, setSortType, setSortOrder, sortedList };
}
