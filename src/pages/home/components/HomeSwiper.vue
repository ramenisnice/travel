<template>
  <div class="wrapper">
    <SwiperWrap
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in slideItems" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
import { Pagination } from "swiper";

import "swiper/css/pagination";

export default {
  setup() {
    const slideItems = [
      {
        id: "0001",
        imgUrl:
          "http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg",
      },
      {
        id: "0002",
        imgUrl:
          "http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg",
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
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
