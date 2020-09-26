import { watch } from 'vue'
import { useDebounce } from './useDebounce'

export function useDebounceFn<T extends (...rest: any[]) => any>(fn: T, delay = 200) {
  const debounceValue = useDebounce(0, delay)
  let params: Parameters<T>

  watch(debounceValue, () => {
    fn(...params)
  })
  return (...rest: Parameters<T>) => {
    params = rest
    debounceValue.value++
  }
}
