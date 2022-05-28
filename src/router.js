import { createRouter, createWebHistory } from 'vue-router';

import Home from "./views/Home.vue";
import Lista from "./views/Lista.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lista',
    name: 'lista',
    component: Lista
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;