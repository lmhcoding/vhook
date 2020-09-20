import { getCurrentInstance, onMounted, onUnmounted } from 'vue'

interface Callback {
  (): any
}

export function useLifecycles(mountedCb: Callback, unmountCb: Callback): void {
  if (getCurrentInstance()) {
    mountedCb && onMounted(mountedCb)
    unmountCb && onUnmounted(unmountCb)
  }
}
