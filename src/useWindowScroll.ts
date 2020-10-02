import { ref, readonly, DeepReadonly, Ref } from 'vue'
import { useEvent } from './useEvent'
import { throttle } from 'throttle-debounce'
import { isClient } from './util'

export interface IWindowScrollState {
  x: DeepReadonly<Ref<number>>
  y: DeepReadonly<Ref<number>>
  clear: () => void
}

export function useWindowScroll(delay = 200): IWindowScrollState {
  const x = ref(isClient ? window.scrollX : 0)
  const y = ref(isClient ? window.scrollY : 0)
  let cb = () => {
    x.value = window.scrollX
    y.value = window.scrollY
  }
  if (delay) {
    cb = throttle(delay, cb)
  }
  const [, clear] = useEvent('scroll', cb, {
    passive: true,
    capture: false
  })
  return {
    x: readonly(x),
    y: readonly(y),
    clear
  }
}
