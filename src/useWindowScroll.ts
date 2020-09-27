import { reactive, toRefs } from 'vue'
import { useEvent } from './useEvent'

export function useWindowScroll() {
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
