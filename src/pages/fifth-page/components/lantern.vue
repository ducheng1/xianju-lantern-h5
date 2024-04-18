<script setup>

</script>

<template>
  <div class="lantern">
    <img src="@/assets/img/lantern/spot/1.png" alt="text" class="lantern-1">
    <img src="@/assets/img/lantern/spot/2.png" alt="text" class="lantern-2">
    <img src="@/assets/img/lantern/spot/3.png" alt="text" class="lantern-3">
    <img src="@/assets/img/lantern/spot/4.png" alt="text" class="lantern-4">
  </div>
</template>

<style scoped lang="scss">
.lantern {
  img {
    position: absolute;
  }

  &-1 {
    width: 609px;
    height: 866px;
    left: -200px;
    top: -100px;
  }

  &-2 {
    width: 422px;
    height: 600px;
    bottom: 0;
    left: 450px;
  }

  &-3 {
    width: 422px;
    height: 600px;
    left: 750px;
    bottom: 0;
  }

  &-4 {
    width: 398px;
    height: 565px;
    left: 1100px;
    bottom: 0;
  }
}
</style>