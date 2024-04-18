<script setup>
const container = shallowRef()

onMounted(() => {
  setTimeout(() => {
    container.value.classList.remove('grayscale')
  }, 1600)
})
</script>

<template>
  <div ref="container" :class="['lantern-2', 'animate__animated', 'animate__fadeInDown', 'grayscale']">
    <img src="@/assets/img/lantern/2.png" alt="lantern" class="lantern">
    <img src="@/assets/img/lantern/title/2.png" alt="title" class="title">
  </div>
</template>

<style scoped lang="scss">
.grayscale {
  filter: grayscale(1);
}

.lantern-2 {
  position: absolute;
  left: 325px;
  transition: filter 500ms ease-out;

  .lantern {
    width: 213px;
    height: 627px;
    animation: swing 3s infinite linear;
    transform-origin: 0 0;
    animation-delay: 500ms;
  }

  .title {
    width: 104px;
    height: 37px;
  }
}
</style>