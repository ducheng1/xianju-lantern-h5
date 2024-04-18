<script setup>
import { Motion, Presence } from '@oku-ui/motion'
import Left from '@/pages/first-page/components/left.vue'
import Right from '@/pages/first-page/components/right.vue'
import Title from '@/pages/first-page/components/title.vue'
import SwipeLoad from '@/components/swipe-load/index.vue'
import { useCommonStore } from '@/store/modules/common.js'

const show = ref(false)

function handleClick() {
  show.value = true
  setTimeout(() => {
    useCommonStore().showSecondPage = true
  }, 1000)
}
</script>

<template>
  <div class="first-page">
    <Left v-if="show" />
    <Title v-if="show" />
    <Presence>
      <Motion :initial="{opacity: 0, y: 100, x: '50%'}" :animate="{opacity: 1, y: 0, x: '50%'}"
          :exit="{opacity: 0, y: 0}" v-if="!show">
        <img src="@/assets/img/button/press-loading.png" alt="button" class="button"
            @click="handleClick">
      </Motion>
    </Presence>
    <Right v-if="show" />
    <SwipeLoad v-if="show" />
  </div>
</template>

<style scoped lang="scss">
.first-page {
  height: 100vw;
  width: 100vh;
  display: flex;
  justify-content: center;
  z-index: 1001;
  position: relative;

  .left, .right {
    flex: 1;
  }

  .button {
    position: absolute;
    transform: translate(-50%);
    bottom: 48px;
    width: 280px;
    height: 65px;
  }
}
</style>