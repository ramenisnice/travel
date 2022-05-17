<template>
  <ul class="list">
    <li
      class="item"
      v-for="letter in letters"
      :key="letter"
      :ref="letter"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ letter }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["cities"],
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters = Object.keys(this.cities);
      return letters;
    },
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop; //74 A元素到绿色头部的下沿
  },
  methods: {
    handleLetterClick(event) {
      this.$emit("letter-change", event.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) clearTimeout(this.timer);
        setTimeout(() => {
          const touchY = e.touches[0].clientY - 79; //clientY是触碰地距页面最顶端的高度 79是绿色header touchY是距header下沿
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length)
            this.$emit("letter-change", this.letters[index]);
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
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
