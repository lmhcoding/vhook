import { getCurrentInstance, isRef, onMounted, onUnmounted, Ref } from 'vue'

export function def<T extends object>(obj: T, key: keyof T, val: any, enumerable?: boolean) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

export type Target = Ref<EventTarget | null> | EventTarget | string

export function getTarget(target: Target): EventTarget {
  if (typeof target === 'string') {
    const dom = document.querySelector(target)
    if (!dom && process.env.NODE_ENV !== 'production') {
      console.error('target is not found')
      throw Error(`target of selector ${target} is not found`)
    }
    return dom!
  }
  if (isRef(target)) {
    return target.value!
  }
  return target
}

export function tryOnMounted(cb: () => any): void {
  const instance = getCurrentInstance()
  if (instance) {
    if (instance?.isMounted) {
      cb()
    } else {
      onMounted(cb)
    }
  }
}

export function tryOnUnmounted(cb: () => any): void {
  if (getCurrentInstance()) {
    onUnmounted(cb)
  }
}
