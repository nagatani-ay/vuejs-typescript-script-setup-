<script setup lang="ts">
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import { Todo } from './types';
import { ref, onMounted, watch } from 'vue';
import { useTodos } from './Function/useTodos';
import { getTime } from './Function/utils';

const todos = ref<Todo[]>([]);

const testData = ref<Todo>({
  code: 'string',
  text: 'string',
  status: false,
  time: 'string',
  deadline: { year: 2022, month: 5, day: 0 },
});

const { add, edit, checked, remove } = useTodos();
function onCreate(data: Todo) {
  add(todos.value, data);
}

function onEdit(data: Todo) {
  edit(todos.value, data);
}

function onRemove(data: string) {
  remove(todos.value, data);
}
function onCheck(data: string) {
  checked(todos.value, data);
}

onMounted(() => {
  if (localStorage.getItem('todolist') != null) {
    todos.value = JSON.parse(localStorage.getItem('todolist'));
  }
});

watch(
  () => todos.value,
  (list, prevList) => {
    if (list != null) {
      localStorage.setItem('todolist', JSON.stringify(list));
    }
  },
  { deep: true }
);
</script>

<template>
  <button @click="todos = []">clear</button>

  <router-view
    :todos="todos"
    @create="onCreate"
    @edit="onEdit"
    @remove="onRemove"
    @check="onCheck"
  ></router-view>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
li {
  list-style: none;
}

ul,
p {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
button {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
