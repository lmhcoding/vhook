import { useStorage, IStorage } from './useStorage'
import { isClient } from './util'

export function useSessionStorage<T>(key: string, val: T): IStorage<T> {
  return useStorage(key, val, isClient ? sessionStorage : null)
}
