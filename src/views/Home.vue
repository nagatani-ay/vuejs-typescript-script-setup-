<script setup lang="ts">
const props = defineProps<{ todos: Todo[] }>();
const emit = defineEmits<{
  (e: 'create', data: Todo);
  (e: 'edit', data: Todo);
  (e: 'delete', data: string);
}>();
</script>

<template>
  <div class="container">
    <div class="header">TodoList</div>
    <div class="body">
      <div class="sidemenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="todolist">TodoList</router-link></li>
        </ul>
      </div>
      <div class="main">
        <router-view
          :todos="todos"
          @create="$emit('create', $event)"
          @edit="$emit('edit', $event)"
          @delete="$emit('delete', $event)"
        ></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: block;
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
}
.body {
  display: flex;
  height: 100%;
}
.header {
  border-bottom: solid 1px black;
  background-color: #fab964;
}
.sidemenu {
  background-color: #facf96;
  width: 10%;
}
.main {
  background-color: #fae4c8;
  width: 100%;
  height: 100%;
}
</style>
