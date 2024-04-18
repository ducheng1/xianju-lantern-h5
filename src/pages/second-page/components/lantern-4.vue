<script setup>
const container = shallowRef()

onMounted(() => {
  setTimeout(() => {
    container.value.classList.remove('grayscale')
  }, 4200)
})
</script>

<template>
  <div ref="container" :class="['lantern-4', 'animate__animated', 'animate__fadeInDown', 'grayscale']">
    <img src="@/assets/img/lantern/4.png" alt="lantern" class="lantern">
    <img src="@/assets/img/lantern/title/4.png" alt="title" class="title">
  </div>
</template>

<style scoped lang="scss">
.grayscale {
  filter: grayscale(1);
}

.lantern-4 {
  position: absolute;
  right: 340px;
  transition: filter 500ms ease-out;

  .lantern {
    width: 198px;
    height: 694px;
    animation: swing 3s infinite linear;
    transform-origin: 0 0;
    animation-delay: 500ms;
  }

  .title {
    width: 69px;
    height: 40px;
  }
}
</style>