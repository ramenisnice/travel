<template>
  <DetailBanner />
  <DetailHeader />
  <div class="content"></div>
</template>

<script>
import DetailBanner from "./components/DetailBanner.vue";
import DetailHeader from "./components/DetailHeader.vue";
export default {
  components: { DetailBanner, DetailHeader },
};
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>
