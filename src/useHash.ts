import { ref } from 'vue'
import { useEvent } from './useEvent'

export function useHash() {
  const state = ref(window.location.hash)

  const setHash = (hash: string) => {
    if (hash !== state.value) {
      window.location.hash = hash
    }
  }

  const onHashChange = () => {
    state.value = window.location.hash
  }
  useEvent('hashchange', onHashChange)
  return {
    state,
    setHash
  }
}
