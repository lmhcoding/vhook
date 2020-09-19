import { mount, VueWrapper } from '@vue/test-utils'
import { defineComponent, ref, Ref } from 'vue'
import { useEvent } from '../src/useEvent'

const props = {
  name: 'resize' as 'resize',
  handler: jest.fn(),
  target: {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  } as unknown as EventTarget
}

const props1 = {
  ...props,
  target: ref({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }) as unknown as Ref<EventTarget>
}

describe('test useEvent when target is an EventTarget', () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    const comp = defineComponent({
      template: '<div>test</div>',
      setup () {
        useEvent(props.name, props.handler, true, props.target)
      }
    })
    wrapper = mount(comp)
  })
  test('should call addEventListener on mount', () => {
    expect(props.target.addEventListener).toHaveBeenCalledTimes(1)
    expect(props.target.addEventListener).toHaveBeenCalledWith(props.name, props.handler, true)
    expect((props.target.addEventListener as any).mock.instances).toEqual([props.target])
  })
  test('should call removeEventListener on unmount', () => {
    wrapper.unmount()
    expect(props.target.removeEventListener).toHaveBeenCalledTimes(1)
    expect(props.target.removeEventListener).toHaveBeenCalledWith(props.name, props.handler)
    expect((props.target.removeEventListener as any).mock.instances).toEqual([props.target])
  })
})

describe('test useEvent when target is a Ref', () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    const comp = defineComponent({
      template: '<div>test</div>',
      setup () {
        useEvent(props1.name, props1.handler, true, props1.target)
      }
    })
    wrapper = mount(comp)
  })
  test('should call addEventListener on mount', () => {
    expect(props1.target.value.addEventListener).toHaveBeenCalledTimes(1)
    expect(props1.target.value.addEventListener).toHaveBeenCalledWith(props1.name, props1.handler, true)
    expect((props1.target.value.addEventListener as any).mock.instances).toEqual([props1.target.value])
  })
  test('should call removeEventListener on unmount', () => {
    wrapper.unmount()
    expect(props1.target.value.removeEventListener).toHaveBeenCalledTimes(1)
    expect(props1.target.value.removeEventListener).toHaveBeenCalledWith(props1.name, props1.handler)
    expect((props1.target.value.removeEventListener as any).mock.instances).toEqual([props1.target.value])
  })
})
