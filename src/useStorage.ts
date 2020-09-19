import { Ref, ref } from 'vue'

function getDefaultValue<T = any>(storage: Storage, key: string, defaultValue: T) {
  const val = storage.getItem(key)
  if (val) {
    try {
      return JSON.parse(val)
    } catch {
      // do nothing
    }
  }
  return defaultValue
}

export interface IStorage<T> {
  state: Ref<T | null>
  setState: (val?: T) => void
}

export function useStorage<T>(storage: Storage, key: string, val: T): IStorage<T> {
  const value = getDefaultValue(storage, key, val)
  const state: Ref<T | null> = ref(null)
  const setState = (val?: T) => {
    if (val === undefined) {
      storage.removeItem(key)
      state.value = null
    } else {
      storage.setItem(key, JSON.stringify(val))
      state.value = val
    }
  }
  setState(value)
  return {
    state,
    setState
  }
}
