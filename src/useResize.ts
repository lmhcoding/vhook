import { DeepReadonly, readonly, Ref, ref } from 'vue'
import { useEvent } from './useEvent'
import { useDebounceFn } from './useDebounceFn'
import { isClient } from './util'

export interface ResizeHandler {
  (this: Window, e: WindowEventMap['resize']): any
}

export interface IResizeState {
  width: DeepReadonly<Ref<number>>
  height: DeepReadonly<Ref<number>>
}

export function useResize(handler: ResizeHandler | null = null, delay = 200): IResizeState {
  const width = ref(isClient ? window.innerWidth : 0)
  const height = ref(isClient ? window.innerHeight : 0)
  let cb: ResizeHandler = function (this: Window, e: WindowEventMap['resize']) {
    handler && handler.call(this, e)
    width.value = window.innerWidth
    height.value = window.innerHeight
  }
  if (delay) {
    cb = useDebounceFn(cb, delay)
  }
  useEvent('resize', cb)
  return {
    width: readonly(width),
    height: readonly(height)
  }
}
