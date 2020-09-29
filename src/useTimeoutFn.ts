import { watch, WatchStopHandle } from 'vue'
import { useTimeout } from './useTimeout'

export function useTimeoutFn(fn: Function, delay = 1000, immediate = true, clearEffectWhenStop = false) {
  const { start, ready, stop } = useTimeout(delay, immediate)
  let stopEffect: WatchStopHandle | undefined
  const startEffect = () => {
    stopEffect = watch(
      ready,
      (hasReady) => {
        hasReady && fn()
      },
      { flush: 'sync' }
    )
  }
  const _stop = () => {
    clearEffectWhenStop && stopEffect!()
    stop()
  }
  startEffect()
  return {
    start: () => {
      clearEffectWhenStop && startEffect()
      start()
    },
    stop: _stop
  }
}
