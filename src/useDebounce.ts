import { customRef, getCurrentInstance, onUnmounted } from 'vue'

export function useDebounce<T>(value: T, delay = 200) {
  let timer: any
  const clear = () => {
    if (timer) {
      clearTimeout(timer)
    }
  }
  if (getCurrentInstance()) {
    onUnmounted(() => {
      clear()
    })
  }
  return customRef((tracker, trigger) => ({
    get() {
      tracker()
      return value
    },
    set(val: T) {
      clear()
      timer = setTimeout(() => {
        value = val
        timer = null
        trigger()
      }, delay)
    }
  }))
}
