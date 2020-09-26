import { DeepReadonly, readonly, Ref, ref } from 'vue'

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

export type IStorage<T> = [DeepReadonly<Ref<T | null>>, (val?: T) => void]

export function useStorage<T>(key: string, val: T, storage: Storage = localStorage): IStorage<T> {
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
  return [readonly(state), setState]
}
