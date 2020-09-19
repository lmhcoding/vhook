import { reactive, toRefs } from 'vue'
import { useEvent } from './useEvent'
import { ScrollState } from './useScroll'

export function useWindowScroll(): ScrollState {
  const state = reactive({
    x: 0,
    y: 0
  })
  useEvent('scroll', () => {
    state.x = window.scrollX
    state.y = window.scrollY
  })
  return toRefs(state)
}
