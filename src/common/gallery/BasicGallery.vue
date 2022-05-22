<template>
  <div class="container" @click="close">
    <div class="wrapper">
      <SwiperWrap
        class="mySwiper"
        :pagination="{ type: 'fraction' }"
        :modules="modules"
        :observeParents="true"
        :observer="true"
      >
        <!-- 父组件传入imgs, 图片url的链接数组 -->
        <SwiperSlide v-for="(img, index) in imgs" :key="index">
          <img class="gallery-img" :src="img" />
        </SwiperSlide>
      </SwiperWrap>
    </div>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import "swiper/css/pagination";
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(_, context) {
    const close = () => {
      context.emit("close");
    };
    return {
      modules: [Pagination],
      close,
    };
  },
};
</script>

<style lang="stylus" scoped>
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper >>> .swiper
        overflow: visible
    .wrapper >>> .swiper-pagination
        color: #fff
        bottom: -1rem
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 100%
        .gallery-img
            width: 100%
</style>
