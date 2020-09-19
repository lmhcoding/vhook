import { reactive, toRefs, ToRefs } from 'vue'
import { useEvent, Target } from './useEvent'

export type ScrollState = ToRefs<{
  x: number
  y: number
}>

export function useScroll(target: Target): ScrollState {
  if (target === window && process.env.NODE_ENV !== 'production') {
    throw Error('target of useScroll should not be window')
  }
  const state = reactive({
    x: 0,
    y: 0,
  })
  const eventTarget = useEvent(
    'scroll',
    () => {
      if (eventTarget.value) {
        state.x = ((eventTarget.value as unknown) as Element).scrollLeft
        state.y = ((eventTarget.value as unknown) as Element).scrollTop
      }
    },
    { capture: false, passive: true },
    target
  )
  return toRefs(state)
}
