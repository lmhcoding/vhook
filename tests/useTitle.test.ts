import { defineComponent, nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { useTitle } from '../src/useTitle'

describe('test useTitle when restoreOnUnMount is true', () => {
  let wrapper: VueWrapper<any>, setTitle: (title: string) => void
  beforeEach(() => {
    const comp = defineComponent({
      template: '<div>test</div>',
      setup () {
        setTitle = useTitle('test', true)
      }
    })
    document.title = 'init'
    wrapper = mount(comp)
  })

  test('useTitle should be defined', () => {
    expect(useTitle).toBeDefined()
  })

  test('document.title should be test after component mounted', () => {
    expect(document.title).toBe('test')
  })

  test('document.title should change after invoking setTitle', (done) => {
    setTitle('change')
    nextTick(() => {
      expect(document.title).toBe('change')
      done()
    })
  })

  test('document.title should be reset to init after component unmounted', () => {
    wrapper.unmount()
    expect(document.title).toBe('init')
  })
})

describe('test useTitle when passing one parameter', () => {
  test('document.title should not be reset to init when component is unmounted', () => {
    const comp = defineComponent({
      template: '<div>test</div>',
      setup () {
        useTitle('test')
      }
    })
    document.title = 'init'
    const wrapper = mount(comp)
    expect(document.title).toBe('test')
    wrapper.unmount()
    expect(document.title).toBe('test')
  })
})
