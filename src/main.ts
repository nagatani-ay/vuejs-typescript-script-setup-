import { createApp } from 'vue';
import App from './App.vue';
import User from './views/User.vue';
import UserTodoList from './views/UserTodoList.vue';
import VueRouter from 'vue-router';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: User,
      children: [{ path: 'todolist', component: UserTodoList }],
    },
  ],
});

createApp(App).use(router).mount('#app');
