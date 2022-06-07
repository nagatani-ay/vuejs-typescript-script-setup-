import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
import { useSort, filterType,sortType,sortOrder} from '../useSort';
import { getTodos } from '../useTodos';
const {setSort,sortedList} =useSort();
const testTodos = getTodos();
  testTodos.value = [{
    code: 'testData1',
    text: 'test1',
    status: false,
    time: 'time',
    deadline: {
      year: 2022,
      month: 5,
      day: 22,
    },
  },
  {
    code: 'testData2',
    text: 'test2',
    status: true,
    time: 'time',
    deadline: {
      year: 2022,
      month: 5,
      day: 22,
    },
  }
];

describe('useSort', () => {
it("ソート順の切り替え",()=>{
  setSort("Time","decend");
  expect(sortType.value).toEqual("Time");
  expect(sortOrder.value).toEqual(-1);
});

it("ソート済みリストの生成",()=>{
  filterType.value="済";
  sortType.value="Text";
  sortOrder.value=1;
  expect(sortedList.value).toEqual([{
    code: 'testData2',
    text: 'test2',
    status: true,
    time: 'time',
    deadline: {
      year: 2022,
      month: 5,
      day: 22,
    },
  }]);
});

it("",()=>{});
it("",()=>{});
it("",()=>{});

});
