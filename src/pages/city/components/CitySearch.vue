<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="alterCurrentCity(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="keyword && listIsEmpty">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: ["cities"],
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  computed: {
    listIsEmpty() {
      return this.list.length === 0;
    },
  },
  methods: {
    alterCurrentCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/");
    },
  },
  mounted() {
    this.bs = new BScroll(".search-content", {
      click: true,
    });
  },
  updated() {
    this.bs.refresh();
  },
  watch: {
    keyword() {
      if (this.timer) clearTimeout(this.timer);
      if (!this.keyword) {
        this.list = [];
        return;
      }
      setTimeout(() => {
        const res = [];
        for (let i in this.cities) {
          this.cities[i].forEach((city) => {
            if (
              city.spell.indexOf(this.keyword) > -1 ||
              city.name.indexOf(this.keyword) > -1
            ) {
              res.push(city);
            }
          });
        }
        this.list = res;
      }, 100);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variables.styl";
.search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
        box-sizing: border-box
        width: 100%
        height: .62rem
        line-height: .62rem
        padding: 0 .1rem
        text-align: center
        border-radius: .06rem
        color: #666
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    background: #fff
    color: #666
</style>
