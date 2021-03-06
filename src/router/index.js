import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Lista from "../views/Lista.vue";

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lista',
      name: 'Lista',
      component: Lista
    }
  ]
})

