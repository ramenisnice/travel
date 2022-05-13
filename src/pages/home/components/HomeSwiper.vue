<template>
  <div class="wrapper">
    <Swiper :pagination="true" :loop="true" :modules="modules" class="mySwiper">
      <SwiperSlide v-for="item in slideItems" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slideItems = [
      {
        id: "0001",
        imgUrl:
          "https://imgs.qunarzz.com/sight/p0/1509/b6/c07f03a93858de47ebe10d916b4afb4b.water.jpg_710x360_ba40f898.jpg",
      },
      {
        id: "0002",
        imgUrl:
          "https://imgs.qunarzz.com/sight/p0/1505/e9/e9b65c2a4cb2d2cb.water.jpg_710x360_61d232ad.jpg",
      },
    ];
    return {
      modules: [Pagination],
      slideItems,
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50.67%
  background: #eee
  .swiper-img
    width: 100%
</style>
