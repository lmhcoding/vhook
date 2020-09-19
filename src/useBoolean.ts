import { Ref } from 'vue'
import { useToggle } from './useToggle'

interface IBoolean {
  state: Ref<boolean>
  setTrue: () => void
  setFalse: () => void
  toggle: (next?: boolean) => void
}

export function useBoolean(defaultValue: boolean = false): IBoolean {
  const { state, toggle } = useToggle(defaultValue)

  return {
    state,
    toggle,
    setTrue: () => toggle(true),
    setFalse: () => toggle(false)
  }
}
