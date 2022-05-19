<template>
  <section class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ getCurrentCity }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentCity"]),
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      margin-top: .1rem
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .21rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding: .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
