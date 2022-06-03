import { useTodos } from '../useTodos';
import { test, expect ,vi} from 'vitest';

test('useTodos'),
  () => {
    const { todos, add, edit, checked, remove, editData } = useTodos();
    // 追加テスト
    add({
      code: 'testitem!!!',
      text: 'test1',
      status: false,
      time: 'time',
      deadline: {
        year: 2022,
        month: 5,
        day: 22,
      },
    });
    expect(todos.value).toEqual([
      {
        code: 'testitem!!!',
        text: 'test1',
        status: false,
        time: 'time',
        deadline: {
          year: 2022,
          month: 5,
          day: 22,
        },
      },
    ]);
    // 追加テスト2
    add({
      code: 'aaaaaa',
      text: 'test2',
      status: false,
      time: 'time',
      deadline: {
        year: 2022,
        month: 5,
        day: 22,
      },
    });
    expect(todos.value).toEqual([
      {
        code: 'testitem!!!',
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
        code: 'aaaaaa',
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
    edit({
      code: 'aaaaaa',
      text: 'test3',
      status: true,
      time: 'time',
      deadline: {
        year: 2022,
        month: 5,
        day: 22,
      },
    });
    expect(todos.value).toEqual([
      {
        code: 'testitem!!!',
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
        code: 'aaaaaa',
        text: 'test3',
        status: true,
        time: 'time',
        deadline: {
          year: 2022,
          month: 5,
          day: 22,
        },
      },
    ]);
    remove('test1');
    expect(todos.value).toEqual([
      {
        code: 'aaaaaa',
        text: 'test3',
        status: true,
        time: 'time',
        deadline: {
          year: 2022,
          month: 5,
          day: 22,
        },
      },
    ]);
    vi.setSystemTime(new Date("2022-06-03 16:09:19"))
    checked('test3');
    expect(todos.value).toEqual([
      {
        code: 'aaaaaa',
        text: 'test3',
        status: true,
        time: 'time',
        deadline: {
          year: 2022,
          month: 6,
          day: 3,
        },
      },
    ]);
  };
