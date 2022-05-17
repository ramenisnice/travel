<template>
  <HomeHeader :city="city" />
  <HomeSwiper :slide-items="swiperList" />
  <HomeIcons :icon-list="iconList" />
  <HomeRecom :recommend-list="recommendList" />
  <HomeWeekend :recommend-list="weekendList" />
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import HomeRecom from "./components/HomeRecom.vue";
import HomeWeekend from "./components/HomeWeekend.vue";
import axios from "axios";

export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecom, HomeWeekend },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  methods: {
    async getHomeInfo() {
      const { data } = await axios.get("mock/index.json");
      if (data.ret && data.data) {
        this.city = data.data.city;
        this.swiperList = data.data.swiperList;
        this.iconList = data.data.iconList;
        this.recommendList = data.data.recommendList;
        this.weekendList = data.data.weekendList;
      } else console.log("error");
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
