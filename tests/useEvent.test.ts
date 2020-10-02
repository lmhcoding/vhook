import { VueWrapper } from '@vue/test-utils'
import { nextTick, onMounted, Ref, ref } from 'vue'
import { IEventTarget, useEvent } from '../src/useEvent'
import { Target } from '../src/util'
import { invokeHook, patchEventTarget } from './util'

const [add, remove] = patchEventTarget()
const handler = jest.fn()

function testUseEvent(description: string, targetFn: () => Target, isRef = false) {
  describe(description, () => {
    let wrapper: VueWrapper<any>
    let clear: () => void
    let target: IEventTarget
    let testRef: Ref<Element | null>
    beforeEach(() => {
      if (isRef) {
        testRef = targetFn() as Ref<Element>
      }
      wrapper = invokeHook(() => {
        onMounted(() => {
          [target, clear] = useEvent(
            'click',
            handler,
            true,
            !isRef ? targetFn() : testRef
          )
        })
        return {
          test: testRef
        }
      })
    })
    test('target should be equal to the target parameter', () => {
      expect(target.value).toEqual(document.getElementById('test'))
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
    test('target.value should be null after invoking clear', () => {
      clear()
      expect(target.value).toBeNull()
    })
    test('event should be removed after unmounted', () => {
      const targetDiv = wrapper.find('#test')
      wrapper.unmount()
      expect(remove).toHaveBeenCalledTimes(1)
      expect(remove).toHaveBeenCalledWith('click', handler, true)
      targetDiv.trigger('click')
      expect(handler).not.toBeCalled()
      expect(target.value).toBeNull()
    })
    if (isRef) {
      test('removeEventListener should be called when ref is manually set to null', async () => {
        const targetDiv = wrapper.find('#test')
        testRef.value = null
        await nextTick()
        expect(remove).toHaveBeenCalledTimes(1)
        expect(remove).toHaveBeenCalledWith('click', handler, true)
        targetDiv.trigger('click')
        expect(handler).not.toBeCalled()
        expect(target.value).toBeNull()
      })
    }
  })
}

testUseEvent(
  'test useEvent when target is an Element',
  () => document.getElementById('test')!
)

testUseEvent(
  'test useEvent when target is a css selector',
  () => '#test'
)

testUseEvent(
  'test useEvent when target is a Ref',
  () => ref(null),
  true
)
