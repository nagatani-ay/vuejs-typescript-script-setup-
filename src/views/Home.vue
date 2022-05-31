<script setup lang="ts">
defineProps<{ todos: Todos[] }>();
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
        <router-view :todos="todos"></router-view>
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
}
.sidemenu {
  background-color: #e0ffff;
}
.main {
  background-color: #e0ffff;
}
</style>
