import { VueWrapper } from '@vue/test-utils'
import { useEventRef } from '../src/useEventRef'
import { invokeHook, patchEventTarget } from './util'

const [add, remove] = patchEventTarget()
const handler = jest.fn()

describe('test useEventRef', () => {
  let wrapper: VueWrapper<any>
  let clear: () => void
  beforeEach(() => {
    wrapper = invokeHook(() => {
      const [target, clearFn] = useEventRef(
        'click',
        handler,
        true
      )
      clear = clearFn
      return {
        test: target
      }
    })
  })
  test('addEventListener should be called after mounted', () => {
    expect(add).toHaveBeenCalledTimes(1)
    expect(add).toHaveBeenCalledWith('click', handler, true)
  })
  test('callback should be called after firing an event', () => {
    const target = wrapper.find('#test')
    target.trigger('click')
    expect(handler).toHaveBeenCalledTimes(1)
  })
  test('removeEventListener should be called after invoking clear', () => {
    clear()
    expect(remove).toHaveBeenCalledTimes(1)
    expect(remove).toHaveBeenCalledWith('click', handler, true)
  })
  test('callback should not be called after invoking clear', () => {
    const target = wrapper.find('#test')
    clear()
    target.trigger('click')
    expect(handler).not.toBeCalled()
  })
  test('event should be removed after unmounted', () => {
    const targetDiv = wrapper.find('#test')
    wrapper.unmount()
    expect(remove).toHaveBeenCalledTimes(1)
    expect(remove).toHaveBeenCalledWith('click', handler, true)
    targetDiv.trigger('click')
    expect(handler).not.toBeCalled()
  })
})
