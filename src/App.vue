<script setup lang="ts">
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import { Todo } from './types.ts';
import { ref } from 'vue';

const todos = ref<Todo[]>([]);

function addTodos() {
  todos.value.push({
    code: 'string',
    text: 'string',
    status: false,
    time: 'string',
    deadline: { year: 2022, month: 5, day: 1 },
  });
}
</script>

<template>
  <router-view :todos="todos"></router-view>
  <button @click="addTodos()">test</button>
</template>

<style></style>
