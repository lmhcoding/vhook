import { ref, watchEffect } from 'vue'
import { tryOnUnmounted } from './util'

export function useTitle(title: string, restoreOnUnMount = false) {
  const cache = document.title
  const titleRef = ref(title)
  watchEffect(() => {
    document.title = titleRef.value
  })
  if (restoreOnUnMount) {
    tryOnUnmounted(() => {
      document.title = cache
    })
  }
  const setTitle = (title: string) => {
    titleRef.value = title
  }
  return setTitle
}
