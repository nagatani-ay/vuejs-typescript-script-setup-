<script setup lang="ts">
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import { Todo } from './types.ts';
import { ref, onMounted, watch } from 'vue';
import { getTime } from './Function/utils';

const todos = ref<Todo[]>([]);

const onCreate = (data) => {
  todos.value.push(data);
};

const onEdit = (data) => {
  const codes = todos.value.map((x) => x.code);
  const target = codes.indexOf(data.code);
  todos.value.splice(target, 1, data);
};

const onDelete = (data) => {
  const codes = todos.value.map((x: Todo) => x.code);
  const target = codes.indexOf(data);
  todos.value.splice(target, 1);
};
const onCheck = (data) => {
  const codes = todos.value.map((x: Todo) => x.code);
  const target = codes.indexOf(data);
  todos.value[target].status = !todos.value[target].status;
  if (todos.value[target].status) {
    todos.value[target].time = '完了:' + getTime();
  } else {
    todos.value[target].time = getTime();
  }
};

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
  <router-view
    :todos="todos"
    @create="onCreate"
    @edit="onEdit"
    @delete="onDelete"
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

ul {
  margin: 0;
  padding: 0;
}
</style>
