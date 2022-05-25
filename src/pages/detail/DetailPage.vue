<template>
  <DetailBanner
    :bannerImg="bannerImg"
    :sightName="sightName"
    :galleryImgs="galleryImgs"
  />
  <DetailHeader />
  <div class="content"><DetailList :list="categoryList" /></div>
</template>

<script>
import axios from "axios";
import DetailBanner from "./components/DetailBanner.vue";
import DetailHeader from "./components/DetailHeader.vue";
import DetailList from "./components/DetailList.vue";

export default {
  components: { DetailBanner, DetailHeader, DetailList },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      galleryImgs: [],
      categoryList: [],
      lastVisitedId: null,
    };
  },
  methods: {
    async getDetailInfo() {
      this.lastVisitedId = this.$route.params.itemId;
      const { data } = await axios.get("../api/detail.json", {
        params: {
          id: this.$route.params.itemId,
        },
      });
      if (data.ret && data.data) {
        const res = data.data;
        this.sightName = res.sightName;
        this.bannerImg = res.bannerImg;
        this.galleryImgs = res.galleryImgs;
        this.categoryList = res.categoryList;
      } else console.log("failed to fetch detail info");
    },
  },
  mounted() {
    this.getDetailInfo();
  },
  activated() {
    if (this.$route.params.itemId !== this.lastVisitedId) {
      this.getDetailInfo();
    }
  },
};
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>
