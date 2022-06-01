import { Todo } from '../types';

export function useTodos(){
  function add(list:Todo[],data:Todo){
    console.log(list)
  }

  return {add}
}