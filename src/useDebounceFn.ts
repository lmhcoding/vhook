import { watch } from 'vue'
import { useDebounce } from './useDebounce'

export function useDebounceFn(fn: Function, delay = 200) {
  const debounceValue = useDebounce(0, delay)

  watch(debounceValue, () => {
    fn()
  })
  return () => {
    debounceValue.value++
  }
}
