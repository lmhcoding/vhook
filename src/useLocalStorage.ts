import { useStorage, IStorage } from './useStorage'

export function useLocalStorage<T>(key: string, val: T): IStorage<T> {
  return useStorage(key, val)
}
