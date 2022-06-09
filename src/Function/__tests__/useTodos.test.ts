import { Todo } from '../../types';
import { useTodos, getTodos } from '../useTodos';
import { expect, vi, it, describe, beforeEach, afterEach } from 'vitest';
const { add, edit, checked, remove, editData, calendarItems, createNewData } =
  useTodos();
const todolist = getTodos();
const testData1: Todo = {
  code: 'testData1',
  text: 'test1',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 5,
    day: 22,
  },
};
const testData2: Todo = {
  code: 'testData2',
  text: 'test2',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 5,
    day: 22,
  },
};
const testData3: Todo = {
  code: 'testData3',
  text: 'test3',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 5,
    day: 24,
  },
};

describe('useTodos', () => {
  beforeEach(() => {});
  afterEach(() => {
    vi.restoreAllMocks();
    todolist.value = [];
  });
  it('空の配列に追加する', () => {
    // 追加テスト
    add(testData1);
    expect(todolist.value).toEqual([testData1]);
  });

  it('空ではない配列にさらに追加する', () => {
    add(testData1);
    add(testData2);
    expect(todolist.value).toEqual([
      {
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
        status: false,
        time: 'time',
        deadline: {
          year: 2022,
          month: 5,
          day: 22,
        },
      },
    ]);
  });

  it('配列から一つのTodo選んで編集する', () => {
    todolist.value.push(testData1);
    todolist.value.push(testData2);
    edit({
      code: 'testData1',
      text: 'test3',
      status: false,
      time: 'time',
      deadline: {
        year: 2022,
        month: 5,
        day: 22,
      },
    });
    expect(todolist.value).toEqual([
      {
        code: 'testData1',
        text: 'test3',
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
        status: false,
        time: 'time',
        deadline: {
          year: 2022,
          month: 5,
          day: 22,
        },
      },
    ]);
  });

  it('配列からTodoを削除して空にする', () => {
    todolist.value.push(testData1);
    remove('testData1');
    expect(todolist.value).toEqual([]);
  });

  it('配列からTodoを一つ削除する', () => {
    todolist.value.push(testData1);
    todolist.value.push(testData2);
    remove('testData1');
    expect(todolist.value).toEqual([testData2]);
  });

  it('未完のTodoを完了にする', () => {
    // システム時間を設定
    vi.setSystemTime(new Date('2022-06-03 16:09:19'));
    todolist.value.push(testData1);
    checked('testData1');
    expect(todolist.value).toEqual([
      {
        code: 'testData1',
        text: 'test1',
        status: true,
        time: '2022/6/3/16:9:19',
        deadline: {
          year: 2022,
          month: 5,
          day: 22,
        },
      },
    ]);
    vi.useRealTimers();
  });

  it('編集したデータを成型する', () => {
    vi.setSystemTime(new Date('2022-06-03 16:09:19'));
    const result = editData(testData1, 'editTest!', '2022-06-01');
    expect(result).toEqual({
      code: 'testData1',
      text: 'editTest!',
      status: false,
      time: '2022/6/3/16:9:19',
      deadline: {
        year: 2022,
        month: 6,
        day: 1,
      },
    });
  });

  it('新しいデータを成型する', () => {
    vi.setSystemTime(new Date('2022-06-03 16:09:19'));
    const spyRandom = vi //関数の結果を指定
      .spyOn(Math, 'random')
      .mockImplementation(() => 0.4904400539860695);
    const result = createNewData('editTest!', '2022-06-01');

    expect(result).toEqual({
      code: 'fm6nle44on4',
      text: 'editTest!',
      status: false,
      time: '2022/6/3/16:9:19',
      deadline: {
        year: 2022,
        month: 6,
        day: 1,
      },
    });
  });

  it('カレンダー用Todoリストを生成', () => {
    todolist.value.push(testData1);
    todolist.value.push(testData2);
    todolist.value.push(testData3);
    expect(calendarItems.value).toEqual({
      '2022-05-22': [testData1, testData2],
      '2022-05-24': [testData3],
    });
  });

  // it("onMountでのデータのロード",()=>{
  //   vi.spyOn(localStorage,"getItem").mockReturnValue('[{"code":"p1r8jdcs3gk","text":"b","status":false,"time":"2022/6/7/13:55:55","deadline":{"year":2022,"month":6,"day":13}}]')
  // })
});
