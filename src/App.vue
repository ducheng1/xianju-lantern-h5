<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/effect-creative'
import FirstPage from './pages/first-page/index.vue'
import SecondPage from './pages/second-page/index.vue'
import ThirdPage from './pages/third-page/index.vue'
import ForthPage from './pages/forth-page/index.vue'
import FifthPage from './pages/fifth-page/index.vue'
import { useCommonStore } from '@/store/modules/common.js'

const modules = [EffectCreative]

function forceLandscapeScreenHandle() {
  const body = document.getElementsByTagName('body')[0]
  const html = document.getElementsByTagName('html')[0]
  const width = html.clientWidth
  const height = html.clientHeight
  const max = width > height ? width : height
  const min = width > height ? height : width
  body.style.width = max + 'px'
  body.style.height = min + 'px'
}

onMounted(() => {
  forceLandscapeScreenHandle()
  window.addEventListener('resize', forceLandscapeScreenHandle)
})

function handleSwipe({activeIndex}) {
  useCommonStore().currentPage = activeIndex
}
</script>

<template>
  <Swiper :modules="modules" direction="vertical" effect="creative" @slide-change="handleSwipe"
      :creative-effect="{
          prev: {
            origin: 'left center',
            translate: ['-100%', 0, 0],
            opacity: 0
          },
          next: {
            origin: 'right center',
            translate: ['100%', 0, 0],
            opacity: 1
          }
        }">
    <SwiperSlide>
      <FirstPage />
    </SwiperSlide>
    <SwiperSlide v-if="useCommonStore().showSecondPage">
      <SecondPage />
    </SwiperSlide>
    <SwiperSlide v-if="useCommonStore().showThirdPage">
      <ThirdPage />
    </SwiperSlide>
    <SwiperSlide v-if="useCommonStore().showForthPage">
      <ForthPage />
    </SwiperSlide>
    <SwiperSlide v-if="useCommonStore().showForthPage">
      <FifthPage />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.swiper {
  height: 100%;

  .swiper-wrapper {
    z-index: 9999;
    position: relative;

    .swiper-slide {
      z-index: 9999;
      position: relative;
    }
  }
}
</style>
