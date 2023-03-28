import {createRouter, createWebHashHistory} from 'vue-router';
import Index from "../views/index/index.vue"

const routes = [{
  path: "/", redirect: "/index",
}, {
  path: '/index', component: () => Index,
}];


const router = createRouter({
  history: createWebHashHistory(),  // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
});

export default router;
