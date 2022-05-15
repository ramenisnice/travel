import { createApp } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import App from "./App.vue";
import router from "./router";
import "@/assets/styles/reset.css";
import "@/assets/styles/border.css";
import "@/assets/styles/iconfont.css";
import "swiper/css";

const app = createApp(App);

app.component("SwiperWrap", Swiper);
app.component("SwiperSlide", SwiperSlide);

app.use(router);
app.mount("#app");
