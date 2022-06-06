import { useTodos,getTodos} from '../useTodos';
import { test, expect ,vi,it,describe,beforeEach} from 'vitest';
const {add, edit, checked, remove, editData } = useTodos();
const todolist = getTodos()
const testData ={
  code: 'testData1',
  text: 'test1',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 5,
    day: 22,
  },
}
const testData2 ={
  code: 'testData2',
  text: 'test2',
  status: false,
  time: 'time',
  deadline: {
    year: 2022,
    month: 5,
    day: 22,
  }
}
beforeEach(()=>{
  todolist.value=[];
})

describe("useTodos",()=>{
  it("addTodo to emptyList",()=>{
        // 追加テスト
        add(testData);
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
        ]);
  })
  it("addTodo to second", async()=>{
    add(testData);
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
          }
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
          }
        }
      ]);
  })
})

    
  //   edit({
  //     code: 'aaaaaa',
  //     text: 'test3',
  //     status: true,
  //     time: 'time',
  //     deadline: {
  //       year: 2022,
  //       month: 5,
  //       day: 22,
  //     },
  //   });
  //   expect(todolist.value).toEqual([
  //     {
  //       code: 'testitem!!!',
  //       text: 'test1',
  //       status: false,
  //       time: 'time',
  //       deadline: {
  //         year: 2022,
  //         month: 5,
  //         day: 22,
  //       },
  //     },
  //     {
  //       code: 'aaaaaa',
  //       text: 'test3',
  //       status: true,
  //       time: 'time',
  //       deadline: {
  //         year: 2022,
  //         month: 5,
  //         day: 22,
  //       },
  //     },
  //   ]);
  //   remove('test1');
  //   expect(todolist.value).toEqual([
  //     {
  //       code: 'aaaaaa',
  //       text: 'test3',
  //       status: true,
  //       time: 'time',
  //       deadline: {
  //         year: 2022,
  //         month: 5,
  //         day: 22,
  //       },
  //     },
  //   ]);
  //   // システム時間を設定
  //   vi.setSystemTime(new Date("2022-06-03 16:09:19"))
  //   checked('test3');
  //   expect(todolist.value).toEqual([
  //     {
  //       code: 'aaaaaa',
  //       text: 'test3',
  //       status: true,
  //       time: 'time',
  //       deadline: {
  //         year: 2022,
  //         month: 6,
  //         day: 3,
  //       },
  //     },
  //   ]);
  //   vi.useRealTimers()
  // };
