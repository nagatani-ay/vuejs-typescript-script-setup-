<script setup lang="ts">
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import { Todo } from './types';
import { ref, onMounted, watch } from 'vue';
</script>

<template>
  <button @click="localStorage.removeItem('todolist')">clear</button>

  <router-view></router-view>
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
