<script setup lang="ts">
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import { Todo } from './types.ts';
import { ref } from 'vue';

const todos = ref<Todo[]>([]);

function onCreate(data) {
  todos.value.push(data);
}
</script>

<template>
  <router-view :todos="todos" @create="onCreate"></router-view>
</template>

<style></style>
