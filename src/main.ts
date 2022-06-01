import { createApp } from 'vue';
import App from './App.vue';
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import Schedule from './views/Schedule.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: 'todolist', component: TodoList },
        { path: 'schedule', component: Schedule },
      ],
    },
  ],
});

createApp(App).use(router).mount('#app');
