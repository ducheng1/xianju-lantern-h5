<script setup>

</script>

<template>
  <div class="elements">
    <img src="@/assets/img/element/element-3.png" alt="element" class="element element-1">
    <img src="@/assets/img/element/element-4.png" alt="element" class="element element-2">
    <img src="@/assets/img/element/stroke-left.png" alt="element" class="element stroke-left">
    <img src="@/assets/img/element/stroke-right.png" alt="element" class="element stroke-right">
  </div>
</template>

<style scoped lang="scss">
.elements {
  position: absolute;
  width: 100vh;
  height: 100vw;
  left: 0;
  z-index: 900;

  .element {
    position: absolute;
    height: 100%;
    bottom: 0;
    object-fit: contain;

    &-1 {
      width: 1551px;
      height: 712px;
      left: 0;
      bottom: 40px;
      z-index: 901;
      animation: fade-1 2s infinite;
    }

    &-2 {
      width: 1525px;
      height: 586px;
      right: 0;
      bottom: 0;
      animation: fade-2 2s infinite;
      animation-delay: 1s;
    }

    &.stroke-left {
      width: 500px;
      height: 624px;
      top: 12px;
      left: 180px;
      z-index: 900;
    }

    &.stroke-right {
      width: 500px;
      height: 624px;
      top: 19px;
      right: 180px;
      z-index: 900;
    }
  }
}


@keyframes fade-1 {
  from, to {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
    transform: translateX(10px);
  }
}

@keyframes fade-2 {
  from, to {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
    transform: translateX(-10px);
  }
}
</style>