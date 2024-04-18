<script setup>
import { Motion, spring } from '@oku-ui/motion'

const strokes = import.meta.glob('../../../assets/img/stroke/right/*', {eager: true})

const strokeList = computed(() => Object.entries(strokes).map(([_, value]) => {
  return new URL(value.default, import.meta.url).href
}))
</script>

<template>
  <div class="right">
    <template v-for="(item,index) in strokeList" :key="index">
      <Motion :initial="{opacity: 0, x: 100}" :animate="{opacity: 1, x: 0}" :transition="{duration: 0.8, easing: spring(), delay: 0.3}">
        <img :src="item" alt="pic" :class="['stroke', `stroke__${index}`]" />
      </Motion>
    </template>
  </div>
</template>

<style scoped lang="scss">
.left {
  position: relative;
  z-index: 1000;
}

.stroke {
  position: absolute;
  opacity: 0.7;
  z-index: 999;
}

.right .stroke {
  &__0 {
    top: 636px;
    left: 200px;
    width: 120px;
  }

  &__1 {
    top: 584px;
    right: 120px;
    width: 90px;
  }

  &__2 {
    top: 69px;
    right: 100px;
    width: 128px;
    height: 81px;
  }

  &__3 {
    top: 309px;
    left: 396px;
    width: 107px;
    height: 92px;
  }

  &__4 {
    top: 518px;
    left: 380px;
    width: 102px;
    height: 88px;
  }

  &__5 {
    top: 54px;
    left: 300px;
    width: 54px;
    height: 115px;
  }

  &__6 {
    top: 152px;
    left: 409px;
    width: 40px;
    height: 117px;
  }

  &__7 {
    top: 397px;
    left: 260px;
    width: 88px;
    height: 120px;
  }

  &__8 {
    top: 278px;
    left: 543px;
    width: 70px;
    height: 131px;
  }

  &__9 {
    top: 36px;
    left: 0;
    width: 102px;
    height: 116px;
  }
}
</style>