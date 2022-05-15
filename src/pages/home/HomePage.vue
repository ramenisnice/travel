<template>
  <HomeHeader />
  <HomeSwiper />
  <HomeIcons />
  <HomeRecom />
  <HomeWeekend />
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import HomeRecom from "./components/HomeRecom.vue";
import HomeWeekend from "./components/HomeWeekend.vue";

export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecom, HomeWeekend },
};
</script>
