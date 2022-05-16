import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home/HomePage.vue";
import CityPage from "./pages/city/CityPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/city",
      component: CityPage,
    },
  ],
});

export default router;
