<script setup>
const showTexture = ref(false)
const showGlow = ref(false)

onMounted(() => {
  setTimeout(() => {
    showGlow.value = true
  }, 1500)
  setTimeout(() => {
    showTexture.value = true
  }, 3500)
})
</script>

<template>
  <div class="lantern">
    <!-- 底座 -->
    <img src="@/assets/img/lantern/split/base.png" alt="base" class="base animate__animated animate__fadeIn">
    <!-- 主灯部分 -->
    <img src="@/assets/img/lantern/split/main-frame.png" alt="main-frame"
        class="main-frame animate__animated animate__fadeIn">
    <!-- 底座发光 -->
    <img src="@/assets/img/lantern/split/base-glow.png" alt="base-glow" class="base-glow" v-if="showGlow">
    <!-- 主灯发光 -->
    <img src="@/assets/img/lantern/split/main-glow.png" alt="main-glow" class="main-glow" v-if="showGlow">
    <!-- 底座纹理 -->
    <img src="@/assets/img/lantern/split/base-texture.png" alt="base-texture"
        class="base-texture animate__animated animate__fadeIn" v-if="showTexture">
    <!-- 主灯纹理 -->
    <img src="@/assets/img/lantern/split/main-texture.png" alt="main-texture"
        class="main-texture animate__animated animate__fadeIn" v-if="showTexture">
  </div>
</template>

<style scoped lang="scss">
.lantern {
  position: relative;
  width: 548px;
  height: 710px;
  z-index: 1002;

  img {
    position: absolute;
  }

  .base {
    width: 273px;
    height: 277px;
    top: 415px;
    left: 134px;
  }

  .base-glow {
    width: 289px;
    height: 293px;
    top: 413px;
    left: 120px;
  }

  .base-texture {
    width: 260px;
    height: 205px;
    top: 457px;
    left: 135px;
  }

  .main-frame {
    width: 520px;
    height: 460px;
    top: 18px;
    left: 14px;
  }

  .main-glow {
    width: 548px;
    height: 495px;
  }

  .main-texture {
    width: 510px;
    height: 449px;
    left: 20px;
    top: 20px;
  }

  .base-glow, .main-glow {
    animation: round 2s ease-out;
  }
}
</style>