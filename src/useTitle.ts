import { ref, watchEffect } from 'vue'
import { tryOnUnmounted, isClient } from './util'

export function useTitle(title: string, restoreOnUnMount = false) {
  const cache = isClient ? document.title : ''
  const titleRef = ref(title)
  watchEffect(() => {
    isClient && (document.title = titleRef.value)
  })
  if (restoreOnUnMount) {
    tryOnUnmounted(() => {
      isClient && (document.title = cache)
    })
  }
  const setTitle = (title: string) => {
    titleRef.value = title
  }
  return setTitle
}
