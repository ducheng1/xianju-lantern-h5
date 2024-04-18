<script setup>
import Lantern from './components/lantern.vue'
import { Motion, PresenceGroup } from '@oku-ui/motion'
import { useCommonStore } from '@/store/modules/common.js'
import SwipeTry from '@/components/swipe-try/index.vue'

const showTry = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTry.value = true
    useCommonStore().showForthPage = true
  }, 5000)
})
</script>

<template>
  <div class="third-page">
    <PresenceGroup>
      <template v-if="useCommonStore().currentPage===2">
        <Lantern />
        <img src="@/assets/img/text/third.png" alt="text" class="text animate__animated animate__zoomIn">
        <Motion>
          <img src="@/assets/img/element/silk-3.png" alt="silk" class="silk animate__animated animate__fadeInLeft">
        </Motion>
      </template>
    </PresenceGroup>
    <SwipeTry v-if="showTry" />
  </div>
</template>

<style scoped lang="scss">
.third-page {
  height: calc(100vw - 28px);
  width: calc(100vh - 60px);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("@/assets/img/bg/bg-third.png");
  margin: 14px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .text {
    position: absolute;
    width: 916px;
    height: 28px;
    bottom: 60px;
    z-index: 1003;
  }

  .silk {
    position: absolute;
    width: 716px;
    height: 470px;
    top: 140px;
    left: -100px;
    z-index: 901;
  }
}

</style>