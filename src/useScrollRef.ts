import { DeepReadonly, ref, Ref } from 'vue'
import { useScroll } from './useScroll'

type ScrollState = DeepReadonly<Ref<number>>

export type IScrollRefResult = [Ref<Element | null>, ScrollState, ScrollState, () => void]

export function useScrollRef(): IScrollRefResult {
  const target: Ref<Element | null> = ref(null)
  const state = useScroll(target)
  return [target, ...state]
}
