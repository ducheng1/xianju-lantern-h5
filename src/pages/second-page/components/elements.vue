<script setup>

</script>

<template>
  <div class="elements animate__animated animate__fadeIn">
    <img src="@/assets/img/element/element-1.png" alt="element" class="element element-1">
    <img src="@/assets/img/element/element-2.png" alt="element" class="element element-2">
    <img src="@/assets/img/element/silk-2.png" alt="element" class="silk">
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
    width: 100%;
    left: 0;
    bottom: 0;
    object-fit: contain;

    &-1 {
      animation: fade-1 2s infinite;
    }

    &-2 {
      animation: fade-2 2s infinite;
      animation-delay: 1s;
    }
  }

  .page {
    height: 100vw;
    width: 100%;
    object-fit: cover;
  }

  img {
    position: absolute;
  }

  .silk {
    width: 1409px;
    height: 298px;
    top: 185px;
    left: 240px;
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