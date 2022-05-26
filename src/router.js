import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./pages/home/HomePage.vue");
const CityPage = () => import("./pages/city/CityPage.vue");
const DetailPage = () => import("./pages/detail/DetailPage.vue");

const router = createRouter({
  history: createWebHistory("/travel/"),
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
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
