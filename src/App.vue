<script setup lang="ts">
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import { Todo } from './types.ts';
import { ref } from 'vue';

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
</script>

<template>
  <router-view
    :todos="todos"
    @create="onCreate"
    @edit="onEdit"
    @delete="onDelete"
  ></router-view>
</template>

<style></style>
