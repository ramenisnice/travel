<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<style lang="stylus" scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
//   transform: scale(0.8);
}

.v-enter-active {
  transition: all 0.5s ease-out;
}

.v-leave-active {
  transition: all 0.5s ease-in;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
//   transform: scale(1);
}
</style>
