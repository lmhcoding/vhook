import { ref, Ref } from 'vue'

export type ToggleParamType = string | number | boolean | undefined | null

export interface ToggleReturn<T extends ToggleParamType = ToggleParamType> {
  state: Ref<T>
  toggle: (next?: boolean) => void
  setDefault: () => void
  setRight: () => void
}

export interface ITwoType<T extends ToggleParamType = ToggleParamType, U extends ToggleParamType = ToggleParamType>
  extends Omit<ToggleReturn<T>, 'state' | 'toggle'> {
  state: Ref<T | U>
  toggle: (next?: T | U) => void
}

export interface IToggle {
  (): ToggleReturn<boolean>
  <T extends ToggleParamType = ToggleParamType>(defaultValue: T): ToggleReturn<T>
  <T extends ToggleParamType = ToggleParamType, U extends ToggleParamType = ToggleParamType>(
    defaultValue: T,
    resetValue?: U
  ): ITwoType<T, U>
}

export const useToggle: IToggle = <
  T extends ToggleParamType = ToggleParamType,
  U extends ToggleParamType = ToggleParamType
>(
    defaultValue: T = false as T,
    reverseValue?: U
  ) => {
  const state = ref(defaultValue) as Ref<T | U>
  const reverseTo = (reverseValue === undefined ? !defaultValue : reverseValue) as T | U

  const toggle = (next?: T | U) => {
    if (next !== undefined) {
      state.value = next
    } else {
      state.value = state.value === defaultValue ? reverseTo : defaultValue
    }
  }
  const setDefault = () => {
    state.value = defaultValue
  }
  const setRight = () => {
    state.value = reverseTo
  }
  return {
    state,
    setDefault,
    setRight,
    toggle
  }
}
