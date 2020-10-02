import { VueWrapper } from '@vue/test-utils'
import { DeepReadonly, Ref } from 'vue'
import { useWindowScroll } from '../src/useWindowScroll'
import { invokeHook } from './util'

let wrapper: VueWrapper<any>
let x: DeepReadonly<Ref<number>>
let y: DeepReadonly<Ref<number>>
let clear: () => void

function patchWindow () {
  let x = 200
  let y = 300
  const originAdd = window.addEventListener
  const originRemove = window.removeEventListener
  const originDispatch = window.dispatchEvent
  const addEventListener = jest.fn(function (event, cb, options) {
    originAdd.call(addEventListener.mock.instances[0], event, cb, options)
  })
  const removeEventListener = jest.fn(function (event, cb, options) {
    originRemove.call(removeEventListener.mock.instances[0], event, cb, options)
  })
  window.addEventListener = addEventListener
  window.removeEventListener = removeEventListener
  Object.defineProperties(window, {
    scrollX: {
      get () {
        return x
      }
    },
    scrollY: {
      get () {
        return y
      }
    }
  })
  const dispatchEvent = jest.fn(function (e: Event) {
    if (e.type === 'scroll') {
      x = 1000
      y = 700
      originDispatch.call(dispatchEvent.mock.instances[0], e)
    }
  })
  window.dispatchEvent = dispatchEvent as any
  return () => {
    x = 200
    y = 300
  }
}

const reset = patchWindow()

function testWindowScroll (description: string, delay = 200) {
  describe(description, () => {
    beforeEach(() => {
      jest.useFakeTimers()
      wrapper = invokeHook(() => {
        const res = useWindowScroll(delay)
        x = res.x
        y = res.y
        clear = res.clear
      })
    })

    afterEach(() => {
      jest.useRealTimers()
      jest.clearAllMocks()
    })

    afterEach(() => {
      reset()
    })
    test('window.addEventListener should be called when mounted', () => {
      expect(window.addEventListener).toHaveBeenCalledTimes(1)
      expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), {
        capture: false,
        passive: true
      })
    })

    test('width/height should not be undefined', () => {
      expect(x).toBeDefined()
      expect(y).toBeDefined()
      expect(x.value).toBe(200)
      expect(y.value).toBe(300)
    })

    test('x / y should be changed when resized', () => {
      window.dispatchEvent(new Event('scroll'))
      delay && jest.advanceTimersByTime(200)
      expect(x.value).toBe(1000)
      expect(y.value).toBe(700)
    })

    test('window.removeEventListener should be called when unmounted', () => {
      wrapper.unmount()
      expect(window.removeEventListener).toHaveBeenCalledTimes(1)
      expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), {
        capture: false,
        passive: true
      })
    })
    test('window.removeEventListener should be called when called clear', () => {
      clear()
      expect(window.removeEventListener).toHaveBeenCalledTimes(1)
      expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), {
        capture: false,
        passive: true
      })
    })
  })
}

testWindowScroll('test useWindowScroll with throttle')
testWindowScroll('test useWindowScroll without throttle')
