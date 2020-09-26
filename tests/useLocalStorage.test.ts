import { Ref } from 'vue'
import { useLocalStorage } from '../src/useLocalStorage'

function testLocalStorage(val: any, newVal: any) {
  describe('test useLocalStorage when localStorage is localStorage and val is not an Object', () => {
    let state: Ref<string | null>
    let setState: (val?: any) => void
    beforeEach(() => {
      [state, setState] = useLocalStorage('test', val)
    })
    test('initial value of key test in localStorage is 1', () => {
      expect(localStorage.getItem('test')).toEqual(JSON.stringify(val))
      expect(state.value).toEqual(val)
    })
    test('value of key test in localStorage should change when invoking setState with new value', () => {
      setState(newVal)
      expect(localStorage.getItem('test')).toEqual(JSON.stringify(newVal))
      expect(state.value).toEqual(newVal)
    })
    test('key test in localStorage should be  removed when invoking setState with no parameter or undefined', () => {
      setState()
      expect(localStorage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
      setState(val)
      expect(localStorage.getItem('test')).toEqual(JSON.stringify(val))
      expect(state.value).toEqual(val)
      setState(undefined)
      expect(localStorage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
    })
  })
}

testLocalStorage('1', '2')
testLocalStorage({ a: 1 }, { a: 2 })
