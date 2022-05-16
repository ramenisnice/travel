<template>
  <div class="wrapper">
    <SwiperWrap
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
      v-if="hasSlideItems"
    >
      <SwiperSlide v-for="item in slideItems" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import { computed } from "vue";
import "swiper/css/pagination";

export default {
  props: ["slideItems"],
  setup(props) {
    const hasSlideItems = computed(() => props.slideItems.length > 0);
    return {
      modules: [Pagination],
      hasSlideItems,
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
