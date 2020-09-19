import { ref, Ref } from 'vue'
import { useScroll, ScrollState } from './useScroll'

interface IScrollState extends ScrollState {
  target: Ref<Element>
}

export function useScrollRef(): IScrollState {
  const target: Ref<Element> = (ref(null) as unknown) as Ref<Element>
  const state = useScroll(target)
  return {
    target,
    ...state,
  }
}
