<script setup>
import Board from '@/components/board/index.vue'
import Elements from '@/pages/forth-page/components/elements.vue'
</script>

<template>
  <div class="forth-page">
    <img src="@/assets/img/button/click-try.png" alt="button" class="button">
    <Board />
    <Elements />
    <img src="@/assets/img/text/forth.png" alt="text" class="text">
    <img src="@/assets/img/lantern/spot/1.png" alt="text" class="lantern">
  </div>
</template>

<style scoped lang="scss">
.forth-page {
  width: 100vh;
  height: 100vw;

  .button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 44px;
    width: 272px;
    height: 65px;
  }

  .text {
    position: absolute;
    width: 271px;
    height: 225px;
    top: 313px;
    right: 80px;
    z-index: 998;
  }

  .lantern {
    position: absolute;
    right: -400px;
    width: 609px;
    height: 866px;
  }
}
</style>