<script setup>
import { Motion } from '@oku-ui/motion'

const strokes = import.meta.glob('../../../assets/img/stroke/title/*', {eager: true})

const strokeList = computed(() => Object.entries(strokes).map(([_, value]) => {
  return new URL(value.default, import.meta.url).href
}))

function getMotion(index) {
  const offset = 50
  switch (index) {
    case 0:
      return {
        initial: {
          opacity: 0,
          x: -offset
        },
        animate: {
          opacity: 1,
          x: 0
        }
      }
    case 1:
      return {
        initial: {
          opacity: 0,
          y: offset
        },
        animate: {
          opacity: 1,
          y: 0
        }
      }
    case 2:
      return {
        initial: {
          opacity: 0,
          y: -offset
        },
        animate: {
          opacity: 1,
          y: 0
        }
      }
    case 3:
      return {
        initial: {
          opacity: 0,
          y: -offset
        },
        animate: {
          opacity: 1,
          y: 0
        }
      }
    case 4:
      return {
        initial: {
          opacity: 0,
          x: -offset
        },
        animate: {
          opacity: 1,
          x: 0
        }
      }
    case 5:
      return {
        initial: {
          opacity: 0,
          y: offset
        },
        animate: {
          opacity: 1,
          y: 0
        }
      }
  }
}
</script>

<template>
  <div class="title">
    <template v-for="(item, index) in strokeList" :key="index">
      <Motion v-bind="getMotion(index)" :transition="{duration: 0.8, easing: 'ease-out'}">
        <img :src="item" alt="pic" :class="['stroke', `stroke__${index}`]" />
      </Motion>
    </template>
    <Motion :initial="{opacity: 0, x: -100}" :animate="{opacity: 1, x: 0}"
        :transition="{duration: 0.8, easing: 'ease-out'}">
      <img src="../../../assets/img/stroke/subtitle.png" alt="subtitle" class="subtitle" />
    </Motion>
  </div>
</template>

<style scoped lang="scss">
.title {
  position: absolute;
  left: -80px;
  z-index: 1000;

  .subtitle {
    position: absolute;
    top: 544px;
    width: 293px;
    height: 62px;
    left: 822px;
  }
}

.stroke {
  position: absolute;

  &__0 {
    top: 306px;
    left: 973px;
    width: 194px;
    height: 71px;
  }

  &__1 {
    top: 362px;
    left: 935px;
    width: 118px;
    height: 162px;
  }

  &__2 {
    top: 110px;
    left: 803px;
    width: 301px;
    height: 360px;
  }

  &__3 {
    top: 117px;
    left: 609px;
    width: 197px;
    height: 224px;
  }

  &__4 {
    top: 217px;
    left: 239px;
    width: 360px;
    height: 425px;
  }

  &__5 {
    top: 302px;
    left: 608px;
    width: 185px;
    height: 383px;
  }
}
</style>