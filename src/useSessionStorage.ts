import { useStorage, IStorage } from './useStorage'

export function useSessionStorage<T>(key: string, val: T): IStorage<T> {
  return useStorage(sessionStorage, key, val)
}
