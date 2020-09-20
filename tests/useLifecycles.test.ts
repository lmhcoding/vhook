import { mount } from '@vue/test-utils'
import { useLifecycles } from '../src/useLifecycles'

describe('test useLifecycles', () => {
  test('callback should be called when mounted or unmounted', () => {
    const onMounted = jest.fn()
    const onUnmounted = jest.fn()
    const wrapper = mount({
      template: '<div>test</div>',
      setup () {
        useLifecycles(onMounted, onUnmounted)
      }
    })
    expect(onMounted).toHaveBeenCalledTimes(1)
    wrapper.unmount()
    expect(onUnmounted).toHaveBeenCalledTimes(1)
  })
})
