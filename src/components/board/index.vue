<script setup>
const container = shallowRef()
const bgColor = ref("#FBA8A7")
</script>

<template>
  <div class="board">
    <vue-esign ref="container" :width="336" :height="689" is-crop :line-width="3" line-color="#D3344F" v-model:bgColor="bgColor" />
  </div>
</template>

<style scoped lang="scss">
.board {
  position: fixed;
  width: 336px;
  height: 689px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  transform-style: preserve-3d;
  z-index: 8000;
}

.container {
  width: 100%;
  height: 100%;
}
</style>