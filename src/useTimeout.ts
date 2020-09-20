import { ref } from 'vue'

export function useTimeout(delay = 1000, immediate = true) {
  const ready = ref(false)
  let timer: any
  const initTimeout = () => {
    ready.value = false
    if (timer) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      ready.value = true
      timer = null
    }, delay)
  }
  immediate && initTimeout()

  return {
    ready,
    start: () => initTimeout()
  }
}
