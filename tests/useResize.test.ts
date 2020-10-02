import { VueWrapper } from '@vue/test-utils'
import { DeepReadonly, Ref } from 'vue'
import { useResize, ResizeHandler } from '../src/useResize'
import { invokeHook } from './util'

let handler: Function
let wrapper: VueWrapper<any>
let width: DeepReadonly<Ref<number>>
let height: DeepReadonly<Ref<number>>

function patchWindow () {
  let width = 200
  let height = 300
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
    innerWidth: {
      get () {
        return width
      }
    },
    innerHeight: {
      get () {
        return height
      }
    }
  })
  const dispatchEvent = jest.fn(function (e: Event) {
    if (e.type === 'resize') {
      width = 1000
      height = 700
      originDispatch.call(dispatchEvent.mock.instances[0], e)
    }
  })
  window.dispatchEvent = dispatchEvent as any
  return () => {
    width = 200
    height = 300
  }
}

const reset = patchWindow()

function testResize (description: string, delay = 200) {
  describe(description, () => {
    beforeEach(() => {
      handler = jest.fn()
      jest.useFakeTimers()
      wrapper = invokeHook(() => {
        const res = useResize(handler as ResizeHandler, delay)
        width = res.width
        height = res.height
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
      expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function), undefined)
    })

    test('width/height should not be undefined', () => {
      expect(width).toBeDefined()
      expect(height).toBeDefined()
      expect(width.value).toBe(200)
      expect(height.value).toBe(300)
    })

    test('width / height should be changed when resized', () => {
      window.dispatchEvent(new Event('resize'))
      delay && jest.advanceTimersByTime(200)
      expect(width.value).toBe(1000)
      expect(height.value).toBe(700)
    })

    test('callback should be called when resized', () => {
      window.dispatchEvent(new Event('resize'))
      delay && jest.advanceTimersByTime(200)
      expect(handler).toBeCalled()
    })

    test('window.removeEventListener should be called when unmounted', () => {
      wrapper.unmount()
      expect(window.removeEventListener).toHaveBeenCalledTimes(1)
      expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function), undefined)
    })
  })
}

testResize('test useResize with debounce')
testResize('test useResize without debounce')
