<script setup lang="ts">
import TodoItem from '../components/TodoList/TodoItem.vue';
import TodoMenu from '../components/TodoList/TodoMenu.vue';
defineProps<{ todos: Todos[] }>();
const emit = defineEmits<{ (e: 'create', data: Todo) }>();
</script>

<template>
  <div>title</div>
  <div class="menu">
    <todo-menu @create="$emit('create', $event)"></todo-menu>
  </div>
  <ul>
    <todo-item v-for="todo in todos" :todo="todo"></todo-item>
  </ul>
</template>

<style></style>
