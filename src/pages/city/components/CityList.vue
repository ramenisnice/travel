<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市区 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ getCurrentCity }}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市区 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="hotCity in hotCities"
            :key="hotCity.id"
            @click="alterCurrentCity(hotCity.name)"
          >
            <div class="button">{{ hotCity.name }}</div>
          </div>
        </div>
      </div>
      <!-- 字母表区 -->
      <div
        class="area"
        v-for="(items, alphabet) in cities"
        :key="alphabet"
        :ref="alphabet"
      >
        <div class="title border-topbottom">{{ alphabet }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="item in items"
            :key="item.id"
            @click="alterCurrentCity(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapGetters } from "vuex";

export default {
  props: ["hotCities", "cities", "letter"],
  computed: {
    ...mapGetters(["getCurrentCity"]),
  },
  methods: {
    alterCurrentCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/");
    },
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0];
      this.bs.scrollToElement(element);
    },
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper, {
      click: true,
    });
  },
  updated() {
    this.bs.refresh();
  },
};
</script>

<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #ccc
.list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    .title
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
    .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
            width: 33.33%
            float: left
            .button
                margin: .1rem
                padding: .1rem 0
                text-align: center
                border: .02rem solid #ccc
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem
</style>
