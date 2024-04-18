<script setup>
import Lantern from '@/pages/fifth-page/components/lantern.vue'
import { Motion, PresenceGroup } from '@oku-ui/motion'
import { useCommonStore } from '@/store/modules/common.js'
</script>

<template>
  <div class="fifth-page">
    <template v-if="useCommonStore().currentPage===4">
      <PresenceGroup>
        <Lantern />
        <Motion :initial="{opacity: 0, y: 100}" :animate="{opacity: 1, y: 0}"
            :transition="{duration: 0.8, easing: 'ease-out'}">
          <img src="@/assets/img/stroke/title.png" alt="main-title" class="main-title">
        </Motion>
        <Motion :initial="{opacity: 0, x: -100}" :animate="{opacity: 1, x: 0}"
            :transition="{duration: 0.8, easing: 'ease-out'}">
          <img src="@/assets/img/stroke/subtitle.png" alt="subtitle" class="subtitle">
        </Motion>
        <img src="@/assets/img/text/fifth-1.png" alt="text-1"
            class="text-1 animate__animated animate__zoomIn animate__delay-1s">
        <img src="@/assets/img/text/fifth-2.png" alt="text-2"
            class="text-2 animate__animated animate__zoomIn animate__delay-1s">
        <img src="@/assets/img/text/inscribe.png" alt="inscribe"
            class="inscribe animate__animated animate__zoomIn animate__delay-2s">
        <img src="@/assets/img/element/silk-4.png" alt="silk" class="silk animate__animated animate__fadeInLeft">
      </PresenceGroup>
    </template>
  </div>
</template>

<style scoped lang="scss">
.fifth-page {
  width: 100vh;
  height: 100vw;
  position: relative;

  .main-title {
    position: absolute;
    top: 24px;
    left: 140px;
    width: 648px;
    height: 402px;
  }

  .subtitle {
    width: 322px;
    height: 67px;
    position: absolute;
    top: 206px;
    left: 820px;
  }

  .text-1 {
    position: absolute;
    width: 149px;
    height: 247px;
    bottom: 129px;
    left: 300px;
  }

  .text-2 {
    position: absolute;
    bottom: 50px;
    transform: translate(-50%);
    left: 55%;
    width: 1182px;
    height: 28px;
  }

  .inscribe {
    position: absolute;
    width: 119px;
    height: 308px;
    top: 43px;
    right: 30px;
  }

  .silk {
    position: absolute;
    width: 1179px;
    height: 245px;
    top: 293px;
    right: 100px;
  }
}
</style>