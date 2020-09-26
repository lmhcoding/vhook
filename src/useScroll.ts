import { DeepReadonly, readonly, ref, Ref } from 'vue'
import { useEvent } from './useEvent'

export type IScrollResult = [DeepReadonly<Ref<number>>, DeepReadonly<Ref<number>>, () => void]

export function useScroll(target: string | Element | Ref<Element | null>): IScrollResult {
  const x = ref(0)
  const y = ref(0)
  const [eventTarget, clear] = useEvent(
    'scroll',
    () => {
      if (eventTarget.value) {
        x.value = ((eventTarget.value as unknown) as Element).scrollLeft
        y.value = ((eventTarget.value as unknown) as Element).scrollTop
      }
    },
    { capture: false, passive: true },
    target
  )
  return [readonly(x), readonly(y), clear]
}
