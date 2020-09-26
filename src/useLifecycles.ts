import { tryOnMounted, tryOnUnmounted } from './util'

interface Callback {
  (): any
}

export function useLifecycles(mountedCb: Callback, unmountCb: Callback): void {
  tryOnMounted(mountedCb)
  tryOnUnmounted(unmountCb)
}
