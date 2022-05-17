<template>
  <ul class="list">
    <li class="item" v-for="(_, alphabet) in cities" :key="alphabet">
      {{ alphabet }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["cities"],
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
.list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        line-height: .4rem
        text-align: center
        color: $bgColor
</style>
