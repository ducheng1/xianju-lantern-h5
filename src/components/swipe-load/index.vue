<script setup>
import { Motion } from '@oku-ui/motion'
</script>

<template>
  <Motion :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1 }" :transition="{delay: 1, duration: 0.5}">
    <div class="swipe-load">
      <img src="@/assets/img/button/swipe-loading.png" alt="button" class="button" />
      <img src="@/assets/img/icon/icon-arrow-right.png" alt="arrow" class="arrow" />
    </div>
  </Motion>
</template>

<style scoped lang="scss">
.swipe-load {
  position: absolute;
  top: 50%;
  right: -120px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 16px;
  transform-origin: 0 0;
  z-index: 1002;

  .button {
    width: 281px;
    height: 65px;
  }

  .arrow {
    width: 72px;
    height: 92px;
    animation: pulse 1000ms infinite;
  }
}
</style>