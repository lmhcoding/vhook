import { ref, readonly, DeepReadonly, Ref } from 'vue'
import { useEvent } from './useEvent'

export interface IHashResult {
  hash: DeepReadonly<Ref<string>>
  setHash: (hash: string) => void
}

export function useHash(): IHashResult {
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
    hash: readonly(state),
    setHash
  }
}
