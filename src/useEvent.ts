/* eslint-disable no-redeclare */
import { Target, getTarget, isClient } from './util'
import { useLifecycles } from './useLifecycles'
import { isRef, watchEffect } from 'vue'

export interface WindowEventHandler<T extends keyof WindowEventMap> {
  (this: Window, e: WindowEventMap[T]): any
}

export interface DocumentEventHandler<T extends keyof DocumentEventMap> {
  (this: Document, e: DocumentEventMap[T]): any
}

export type HandlerOptions = boolean | AddEventListenerOptions
export type DocumentEvents = keyof DocumentEventMap
export type WindowEvents = keyof WindowEventMap

function registerEvent(
  target: Target | null,
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

export interface IEventTarget {
  readonly value: EventTarget | null
}

export type IEventResult = [IEventTarget, () => void]

const defaultTarget = isClient ? window : null

export function useEvent<T extends WindowEvents>(
  event: T,
  handler: WindowEventHandler<T>,
  options?: HandlerOptions
): IEventResult
export function useEvent<T extends DocumentEvents>(
  event: T,
  handler: DocumentEventHandler<T>,
  options?: HandlerOptions,
  target?: Target
): IEventResult
export function useEvent<T extends DocumentEvents>(
  event: T,
  handler: DocumentEventHandler<T>,
  options?: HandlerOptions,
  target?: string
): IEventResult
export function useEvent(
  event: string,
  cb: EventListenerOrEventListenerObject,
  options?: HandlerOptions,
  target: Target | null = defaultTarget
) {
  if (!event || !cb) {
    return
  }
  let eventTarget: EventTarget | null = null
  function register() {
    eventTarget = registerEvent(target, event, cb, options)
  }
  function clear() {
    if (eventTarget) {
      eventTarget.removeEventListener(event, cb, options)
      eventTarget = null
    }
  }
  useLifecycles(
    () => {
      if (isRef(target)) {
        watchEffect(
          (onInvalidate) => {
            register()
            onInvalidate(() => {
              clear()
            })
          },
          { flush: 'sync' }
        )
      } else {
        register()
      }
    },
    () => {
      clear()
    }
  )
  const targetDom = {
    get value() {
      return eventTarget
    }
  }
  return [targetDom, clear]
}
