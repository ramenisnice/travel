import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home/HomePage.vue";
import CityPage from "./pages/city/CityPage.vue";
import DetailPage from "./pages/detail/DetailPage.vue";

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
    {
      path: "/detail/:itemId",
      component: DetailPage,
    },
  ],
});

export default router;
