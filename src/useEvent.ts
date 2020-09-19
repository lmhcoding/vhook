/* eslint-disable no-redeclare */
import { Ref, onMounted, onUnmounted, isRef, getCurrentInstance, shallowRef } from 'vue'

export type Target = Ref<EventTarget> | EventTarget | string

interface WindowEventHandler<T extends keyof WindowEventMap> {
  (this: Window, e: WindowEventMap[T]): any
}

interface DocumentEventHandler<T extends keyof DocumentEventMap> {
  (this: Document, e: DocumentEventMap[T]): any
}

type HandlerOptions = boolean | AddEventListenerOptions
type DocumentEvents = keyof DocumentEventMap
type WindowEvents = keyof WindowEventMap

function getTarget(target: Target): EventTarget {
  if (!target) {
    return window
  }
  if (typeof target === 'string') {
    const dom = document.querySelector(target)
    if (!dom && process.env.NODE_ENV !== 'production') {
      console.error('target is not found')
      throw Error(`target of selector ${target} is not found`)
    }
    return dom!
  }
  if (isRef(target)) {
    return target.value
  }
  return target
}

function registerEvent(
  target: Target,
  event: string,
  cb: EventListenerOrEventListenerObject,
  options?: HandlerOptions
) {
  const eventTarget = getTarget(target)
  if (eventTarget) {
    eventTarget.addEventListener(event, cb, options)
  }
  return eventTarget
}

export function useEvent<T extends WindowEvents>(
  event: T,
  handler: WindowEventHandler<T>,
  options?: HandlerOptions
): Ref<EventTarget>
export function useEvent<T extends DocumentEvents>(
  event: T,
  handler: DocumentEventHandler<T>,
  options?: HandlerOptions,
  target?: Target
): Ref<EventTarget>
export function useEvent<T extends DocumentEvents>(
  event: T,
  handler: DocumentEventHandler<T>,
  options?: HandlerOptions,
  target?: string
): Ref<EventTarget>
export function useEvent(
  event: string,
  cb: EventListenerOrEventListenerObject,
  options?: HandlerOptions,
  target: Target = window
) {
  if (!event || !cb) {
    return
  }
  const eventTarget: Ref<EventTarget | null> = shallowRef(null)
  function register() {
    eventTarget.value = registerEvent(target, event, cb, options)
  }
  const currentInstance = getCurrentInstance()
  if (currentInstance) {
    if (currentInstance.isMounted) {
      register()
    } else {
      onMounted(() => {
        register()
      })
    }
    onUnmounted(() => {
      if (eventTarget.value) {
        eventTarget.value.removeEventListener(event, cb)
      }
    })
  }
  return eventTarget
}
