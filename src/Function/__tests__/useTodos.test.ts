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
  it("空の配列に追加する",()=>{
        // 追加テスト
        add(testData);
        expect(todolist.value).toEqual([
          testData
        ]);
  })

  it("空ではない配列にさらに追加する", ()=>{
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

  it("配列から一つのTodo選んで編集する",()=>{
    todolist.value.push(testData)
    todolist.value.push(testData2)
    edit({
      code: 'testData1',
      text: 'test3',
      status: false,
      time: 'time',
      deadline: {
        year: 2022,
        month: 5,
        day: 22,
      }
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

  it("配列からTodoを削除して空にする",()=>{
    todolist.value.push(testData)
    remove('testData1');
    expect(todolist.value).toEqual([]);
  })

  it("配列からTodoを一つ削除する",()=>{
    todolist.value.push(testData)
    todolist.value.push(testData2)
    remove('testData1');
    expect(todolist.value).toEqual([testData2]);
  })

  it("未完のTodoを完了にする",()=>{
    // システム時間を設定
    vi.setSystemTime(new Date("2022-06-03 16:09:19"))
    todolist.value.push(testData)
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
      }
    ]);
    vi.useRealTimers()
  })
})


  
  
  

    

