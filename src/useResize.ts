import { useEvent } from './useEvent'

export interface ResizeHandler {
  (this: Window, e: WindowEventMap['resize']): any
}

export function useResize(handler: ResizeHandler): void {
  useEvent('resize', handler)
}
