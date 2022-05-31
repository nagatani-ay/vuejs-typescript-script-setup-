<script setup lang="ts">
import TodoItem from '../components/TodoList/TodoItem.vue';
import TodoMenu from '../components/TodoList/TodoMenu.vue';
const props = defineProps<{ todos: Todo[] }>();
const emit = defineEmits<{
  (e: 'create', data: Todo);
  (e: 'edit', data: Todo);
  (e: 'delete', data: string);
  (e: 'check', data: string);
}>();
</script>

<template>
  <div>ToDo</div>
  <div class="menu">
    <todo-menu @create="$emit('create', $event)"></todo-menu>
  </div>
  <ul>
    <todo-item
      v-for="todo in todos"
      :todo="todo"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
      @check="$emit('check', $event)"
    ></todo-item>
  </ul>
</template>

<style></style>
