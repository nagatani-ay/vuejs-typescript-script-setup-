<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="header"><h1>TodoList</h1></div>
    <div class="body">
      <div class="sidemenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="todolist">TodoList</router-link></li>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
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
  width: 100%;
  height: 100%;
}
.header {
  background-color: red;
}
.sidemenu {
  background-color: blue;
  height: 100%;
}
.main {
  background-color: yellow;
}
</style>
