import { DeepReadonly, readonly, ref, Ref } from 'vue'
import { useEvent } from './useEvent'
import { throttle } from 'throttle-debounce'

export type IScrollResult = [DeepReadonly<Ref<number>>, DeepReadonly<Ref<number>>, () => void]

export function useScroll(target: string | Element | Ref<Element | null>, delay = 200): IScrollResult {
  const x = ref(0)
  const y = ref(0)
  let cb = () => {
    if (eventTarget.value) {
      x.value = ((eventTarget.value as unknown) as Element).scrollLeft
      y.value = ((eventTarget.value as unknown) as Element).scrollTop
    }
  }
  if (delay) {
    cb = throttle(delay, cb)
  }
  const [eventTarget, clear] = useEvent('scroll', cb, { capture: false, passive: true }, target)
  return [readonly(x), readonly(y), clear]
}
