<template>
  <HomeHeader />
  <HomeSwiper />
  <HomeIcons />
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";

export default {
  components: { HomeHeader, HomeSwiper, HomeIcons },
};
</script>
