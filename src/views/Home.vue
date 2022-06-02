<script setup lang="ts">
const props = defineProps<{}>();
const emit = defineEmits<{}>();
</script>

<template>
  <div class="container">
    <div class="header bg-green-300">TodoList</div>
    <div class="body">
      <div class="sidemenu bg-green-200">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="todolist">TodoList</router-link></li>
          <li><router-link to="schedule">Schedule</router-link></li>
        </ul>
      </div>
      <div class="main bg-green-100">
        <router-view></router-view>
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
}
.sidemenu {
  width: 10%;
}
.main {
  padding: 0 10px;
  width: 100%;
  height: 100%;
}
</style>
