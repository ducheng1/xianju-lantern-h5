export const useCommonStore = defineStore('common', () => {
  const showSecondPage = ref(false)
  const showThirdPage = ref(false)
  const showForthPage = ref(false)
  const currentPage = ref(0)

  return {
    showSecondPage,
    showThirdPage,
    showForthPage,
    currentPage
  }
})