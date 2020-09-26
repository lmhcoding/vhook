import { useLifecycles } from './useLifecycles'

export function useInterval(fn: Function, delay: number, immediate = false) {
  let interval: number | null = null
  const clear = () => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }
  const start = () => {
    if (!interval) {
      interval = setInterval(fn, delay)
    }
  }
  useLifecycles(
    () => {
      if (fn) {
        immediate && fn()
        start()
      }
    },
    () => {
      clear()
    }
  )
  return [clear, start]
}
