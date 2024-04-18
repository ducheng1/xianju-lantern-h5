<script setup>
const container = shallowRef()

onMounted(() => {
  setTimeout(() => {
    container.value.classList.remove('grayscale')
  }, 200)
})
</script>

<template>
  <div ref="container" :class="['lantern-1', 'animate__animated', 'animate__fadeInDown', 'grayscale']">
    <img src="@/assets/img/lantern/1.png" alt="lantern" class="lantern">
    <img src="@/assets/img/lantern/title/1.png" alt="title" class="title">
  </div>
</template>

<style scoped lang="scss">
.grayscale {
  filter: grayscale(1);
}

.lantern-1 {
  position: absolute;
  left: 30px;
  transition: filter 500ms ease-out;

  .lantern {
    width: 215px;
    height: 409px;
    animation: swing 3s infinite linear;
    transform-origin: 0 0;
  }

  .title {
    width: 101px;
    height: 38px;
  }
}
</style>