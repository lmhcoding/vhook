import { useLifecycles } from './useLifecycles'

export function useInterval(fn: Function, delay: number, immediate = false) {
  let interval: number | null = null
  const clear = () => {
    if (interval) {
      clearInterval(interval)
    }
  }
  useLifecycles(
    () => {
      if (fn) {
        immediate && fn()
        interval = setInterval(fn, delay)
      }
    },
    () => {
      clear()
    }
  )
  return clear
}
