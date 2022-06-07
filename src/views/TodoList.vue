<script setup lang="ts">
import TodoItem from '../components/TodoList/TodoItem.vue';
import TodoMenu from '../components/TodoList/TodoMenu.vue';
import { useSort } from '../Function/useSort';
const { sortedList } = useSort();
</script>

<template>
  <div>ToDo</div>
  <div class="menu">
    <todo-menu></todo-menu>
  </div>
  <ul>
    <todo-item
      v-for="todo in sortedList"
      :key="todo.code"
      :todo="todo"
    ></todo-item>
  </ul>
</template>

<style></style>
