<script setup lang="ts">
defineProps<{ todos: Todos[] }>();
const emit = defineEmits<{ (e: 'create', data: Todo) }>();
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
        ></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: block;
  max-width: 1000px;
}
.body {
  display: flex;
}
.header {
  border-bottom: solid 1px black;
  background-color: #fab964;
}
.sidemenu {
  background-color: #facf96;
}
.main {
  background-color: #fae4c8;
}
</style>
