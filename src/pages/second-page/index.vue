<script setup>
import Lantern1 from '@/pages/second-page/components/lantern-1.vue'
import Lantern2 from '@/pages/second-page/components/lantern-2.vue'
import Lantern3 from '@/pages/second-page/components/lantern-3.vue'
import Lantern4 from '@/pages/second-page/components/lantern-4.vue'
import Lantern5 from '@/pages/second-page/components/lantern-5.vue'
import { Motion, PresenceGroup } from '@oku-ui/motion'
import Elements from '@/pages/second-page/components/elements.vue'
import { useCommonStore } from '@/store/modules/common.js'

onMounted(() => {
  setTimeout(() => {
    useCommonStore().showThirdPage = true
  }, 8000)
})
</script>

<template>
  <div class="second-page">
    <PresenceGroup>
      <template v-if="useCommonStore().currentPage===1">
        <Lantern1 :class="['el-lantern']" />
        <Lantern2 :class="['el-lantern']" />
        <Lantern3 :class="['el-lantern']" />
        <Lantern4 :class="['el-lantern']" />
        <Lantern5 :class="['el-lantern']" />
        <Motion>
          <img src="@/assets/img/element/silk.png" alt="silk" class="silk">
        </Motion>
        <img src="@/assets/img/text/second.png" alt="text" class="text animate__animated animate__zoomIn">
      </template>
    </PresenceGroup>
    <Elements />
  </div>
</template>

<style scoped lang="scss">
.second-page {
  display: flex;
  position: relative;

  .el-lantern {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 900;
  }

  .silk {
    position: absolute;
    width: 2263px;
    height: 470px;
    top: 140px;
    left: 40px;
    z-index: 901;
    animation: clip 8s linear;
  }

  .text {
    position: absolute;
    z-index: 1200;
    width: 961px;
    height: 70px;
    top: 53px;
    left: 300px;
  }
}
</style>