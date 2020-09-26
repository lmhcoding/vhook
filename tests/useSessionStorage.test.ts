import { Ref } from 'vue'
import { useSessionStorage } from '../src/useSessionStorage'

function testSessionStorage(val: any, newVal: any) {
  describe('test useLocalStorage when sessionStorage is localStorage and val is not an Object', () => {
    let state: Ref<string | null>
    let setState: (val?: any) => void
    beforeEach(() => {
      [state, setState] = useSessionStorage('test', val)
    })
    test('initial value of key test in sessionStorage is 1', () => {
      expect(sessionStorage.getItem('test')).toEqual(JSON.stringify(val))
      expect(state.value).toEqual(val)
    })
    test('value of key test in sessionStorage should change when invoking setState with new value', () => {
      setState(newVal)
      expect(sessionStorage.getItem('test')).toEqual(JSON.stringify(newVal))
      expect(state.value).toEqual(newVal)
    })
    test('key test in sessionStorage should be  removed when invoking setState with no parameter or undefined', () => {
      setState()
      expect(sessionStorage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
      setState(val)
      expect(sessionStorage.getItem('test')).toEqual(JSON.stringify(val))
      expect(state.value).toEqual(val)
      setState(undefined)
      expect(sessionStorage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
    })
  })
}

testSessionStorage('1', '2')
testSessionStorage({ a: 1 }, { a: 2 })
