<template>
  <HomeHeader />
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
import { mapGetters } from "vuex";

export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecom, HomeWeekend },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  computed: {
    ...mapGetters(["getCurrentCity"]),
  },
  methods: {
    async getHomeInfo() {
      const { data } = await axios.get(
        "api/index.json?city=" + this.getCurrentCity
      );
      if (data.ret && data.data) {
        this.swiperList = data.data.swiperList;
        this.iconList = data.data.iconList;
        this.recommendList = data.data.recommendList;
        this.weekendList = data.data.weekendList;
      } else console.log("error");
    },
  },
  mounted() {
    this.lastCity = this.getCurrentCity;
    this.getHomeInfo();
  },
  activated() {
    if (this.getCurrentCity !== this.lastCity) {
      this.getHomeInfo();
      this.lastCity = this.getCurrentCity;
    }
  },
};
</script>
