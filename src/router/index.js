import {createRouter, createWebHashHistory} from 'vue-router';
import Index from "../views/index/index.vue"
import Approach from "../views/approach/approach.vue"
import Project from "../views/project/project.vue"

const routes = [
  {
    path: "/", redirect: "/index",
  }, {
    path: '/index', component: () => Index,
  }
  , {
    path: '/approach', component: () => Approach,
  }
  , {
    path: '/project', component: () => Project,
  }
];


const router = createRouter({
  history: createWebHashHistory(),  // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
});

export default router;
