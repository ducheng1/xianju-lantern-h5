<script setup>
import IconMusic from '@/assets/svg/music.svg?component'

const audioRef = shallowRef()
const play = ref(false)

function handlePlay() {
  play.value = !play.value
  if (play.value) {
    startPlay()
  } else {
    audioRef.value.pause()
  }
}

function startPlay() {
  audioRef.value.play()
}

</script>

<template>
  <button :class="['music',play?'':'muted']" @click="handlePlay">
    <IconMusic />
    <audio ref="audioRef" autoplay @canplay="startPlay">
      <source src="@/assets/mp3/bgm.mp3" type="audio/mpeg">
    </audio>
  </button>
</template>

<style scoped lang="scss">
.music {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  border: 1px solid #f3f89a;
  color: #f3f89a;
  animation: spin 10s infinite linear;

  &.muted {
    animation: none;

    &:before {
      content: 'x';
      position: absolute;
      bottom: 0;
      right: 0;
      color: red;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}
</style>
