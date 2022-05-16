<template>
  <div class="icons">
    <SwiperWrap>
      <SwiperSlide v-for="(page, pageIdx) in pages" :key="pageIdx">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="icon.imgUrl" />
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </SwiperSlide>
    </SwiperWrap>
  </div>
</template>

<script>
export default {
  props: ["iconList"],
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';
.icons >>> .swiper-slide
    height: 0
    padding-bottom: 50%
.icons
  margin-top: .1rem
  .icon
      position: relative
      overflow: hidden
      width: 25%
      height: 0
      float: left
      padding-bottom: 25%
      .icon-img
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: .44rem
          box-sizing: border-box
          padding: .1rem
          .icon-imgcontent
              display: block
              margin: 0 auto
              height: 100%
      .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
          ellipsis()
</style>
