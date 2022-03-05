import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    name : "home",
    component : Home,
    path : '/'
  },
  {
    name: "about",
    component: About,
    path: '/about'
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)",
    component: NotFound
  }
];

const router = createRouter({
  routes,
  history : createWebHashHistory()
});

export default router;