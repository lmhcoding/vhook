import { ref, onUnmounted, watchEffect } from 'vue'

export function useTitle(title: string, restoreOnUnMount = false) {
  const cache = document.title
  const titleRef = ref(title)
  watchEffect(() => {
    document.title = titleRef.value
  })
  if (restoreOnUnMount) {
    onUnmounted(() => {
      document.title = cache
    })
  }
  const setTitle = (title: string) => {
    titleRef.value = title
  }
  return setTitle
}
