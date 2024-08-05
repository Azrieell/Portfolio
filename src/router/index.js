import {
  createWebHistory,
  createRouter
} from "vue-router";
import MainLayouts from "../layouts/MainLayouts.vue";
import HomeMain from "../views/Main/HomeMain.vue";

const routes = [{
  path: "/",
  component: MainLayouts,
  children: [{
    path: "",
    component: HomeMain,
    name: "HomeMain",
    meta: {
      title: "Azriel",
    },
  }]
}]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;