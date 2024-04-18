<script setup>
const container = shallowRef()

onMounted(() => {
  setTimeout(() => {
    container.value.classList.remove('grayscale')
  }, 5000)
})
</script>

<template>
  <div ref="container" :class="['lantern-5', 'animate__animated', 'animate__fadeInDown', 'grayscale']">
    <img src="@/assets/img/lantern/5.png" alt="lantern" class="lantern">
    <img src="@/assets/img/lantern/title/5.png" alt="title" class="title">
  </div>
</template>

<style scoped lang="scss">
.grayscale {
  filter: grayscale(1);
}

.lantern-5 {
  position: absolute;
  right: 75px;
  transition: filter 500ms ease-out;

  .lantern {
    width: 240px;
    height: 492px;
    animation: swing 3s infinite linear;
    transform-origin: 0 0;
  }

  .title {
    width: 190px;
    height: 41px;
  }
}
</style>