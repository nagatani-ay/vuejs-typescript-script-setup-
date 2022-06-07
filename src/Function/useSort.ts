import { Todo, SortType, FilterType, OrderType } from '../types';
import { getTodos } from './useTodos';
import { toStringDeadline } from './utils';
import { ref, computed } from 'vue';

const filterType = ref<FilterType>('全');
const sortType = ref<SortType>('Text');
const sortOrder = ref<number>(1);//1か-1限定の型に

export function useSort() {
  const todolist = getTodos();
  function setFilter(type: FilterType) {
    filterType.value = type;
  }
  function setSort(type: SortType, order: OrderType) {
    sortType.value = type;
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
    } else if (sortType.value === 'Time') {
      list = timeSort(list, sortOrder.value);
    } else if (sortType.value === 'Deadline') {
      list = deadlineSort(list, sortOrder.value);
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
    return newList;
  }

  function timeSort(list: Todo[], order: number) {
    const newList = list.sort((a: Todo, b: Todo) => {
      if (a.time === b.time) {
        //aとbが同じなら
        return a.text < b.text ? order : -order;
      }
      return a.time < b.time ? order : -order;
    });
    return newList;
  }

  function deadlineSort(list: Todo[], order: number) {
    const newList = list.sort((a: Todo, b: Todo) => {
      let deadline_a = toStringDeadline(a.deadline);
      let deadline_b = toStringDeadline(b.deadline);
      if (deadline_a === deadline_b) {
        return a.text < b.text ? order : -order;
      }
      return deadline_a < deadline_b ? order : -order;
    });
    return newList;
  }

  return { setFilter, setSort, sortedList };
}
