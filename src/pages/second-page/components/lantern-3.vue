<script setup>
const container = shallowRef()

onMounted(() => {
  setTimeout(() => {
    container.value.classList.remove('grayscale')
  }, 3000)
})
</script>

<template>
  <div ref="container" :class="['lantern-3', 'animate__animated', 'animate__fadeInDown', 'grayscale']">
    <img src="@/assets/img/lantern/3.png" alt="lantern" class="lantern">
    <img src="@/assets/img/lantern/title/3.png" alt="title" class="title">
  </div>
</template>

<style scoped lang="scss">
.grayscale {
  filter: grayscale(1);
}

.lantern-3 {
  position: absolute;
  left: 664px;
  transition: filter 500ms ease-out;

  .lantern {
    width: 266px;
    height: 357px;
    animation: swing 3s infinite linear;
    transform-origin: 0 0;
  }

  .title {
    width: 99px;
    height: 36px;
    margin-left: 20px;
  }
}
</style>