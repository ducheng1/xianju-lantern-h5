<script setup>
import { Motion, spring } from '@oku-ui/motion'

const strokes = import.meta.glob('../../../assets/img/stroke/left/*', {eager: true})

const strokeList = computed(() => Object.entries(strokes).map(([_, value]) => {
  return new URL(value.default, import.meta.url).href
}))
</script>

<template>
  <div class="left">
    <template v-for="(item,index) in strokeList" :key="index">
      <Motion :initial="{opacity: 0, x: -100}" :animate="{opacity: 1, x: 0}" :transition="{duration: 2, easing: spring(), delay: 0.8}">
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
}

.left .stroke {
  &__0 {
    top: 347px;
    left: 92px;
    width: 94px;
  }

  &__1 {
    top: 171px;
    left: 228px;
    width: 58px;
  }

  &__2 {
    top: 51px;
    left: 69px;
    width: 57px;
    height: 114px;
  }

  &__3 {
    top: 284px;
    left: 296px;
    width: 122px;
    height: 91px;
  }

  &__4 {
    top: 583px;
    left: 66px;
    width: 79px;
    height: 109px;
  }

  &__5 {
    top: 483px;
    left: 430px;
    width: 66px;
    height: 95px;
  }

  &__6 {
    top: 78px;
    left: 409px;
    width: 138px;
    height: 47px;
  }

  &__7 {
    top: 506px;
    left: 236px;
    width: 107px;
    height: 124px;
  }

  &__8 {
    top: 593px;
    left: 543px;
    width: 66px;
    height: 121px;
  }
}
</style>