import { createApp } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import App from "./App.vue";
import BasicGallery from "./common/gallery/BasicGallery.vue";
import FadeAnimation from "./common/fade-animation/FadeAnimation.vue";
import router from "./router";
import store from "./store/index.js";
import "@/assets/styles/reset.css";
import "@/assets/styles/border.css";
import "@/assets/styles/iconfont.css";
import "swiper/css";

const app = createApp(App);

app.component("SwiperWrap", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.component("BasicGallery", BasicGallery);
app.component("FadeAnimation", FadeAnimation);

app.use(router);
app.use(store);

app.mount("#app");
