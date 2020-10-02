import { Ref } from 'vue'
import { useStorage } from '../src/useStorage'
import { invokeHook } from './util'

function testStorageWithSimpleVal (storage: Storage) {
  describe('test useStorage when storage is storage and val is not an Object', () => {
    let state: Ref<string | null>
    let setState: (val?: string) => void
    beforeEach(() => {
      invokeHook(() => {
        [state, setState] = useStorage('test', '1', storage)
      })
    })
    test('initial value of key test in storage is 1', () => {
      expect(storage.getItem('test')).toBe(JSON.stringify('1'))
      expect(state.value).toBe('1')
    })
    test('value of key test in storage should change when invoking setState with new value', () => {
      setState('2')
      expect(storage.getItem('test')).toBe(JSON.stringify('2'))
      expect(state.value).toBe('2')
    })
    test('key test in storage should be  removed when invoking setState with no parameter or undefined', () => {
      setState()
      expect(storage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
      setState('2')
      expect(storage.getItem('test')).toBe(JSON.stringify('2'))
      expect(state.value).toBe('2')
      setState(undefined)
      expect(storage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
    })
  })
}

function testStorageWithObject (storage: Storage) {
  describe('test useStorage when storage is storage and val is an Object', () => {
    let state: Ref<{ a: number} | null>
    let setState: (val?: { a: number }) => void
    beforeEach(() => {
      [state, setState] = useStorage('test', { a: 1 }, storage)
    })
    test('initial value of key test in storage is 1', () => {
      expect(storage.getItem('test')).toBe(JSON.stringify({ a: 1 }))
      expect(state.value).toEqual({ a: 1 })
    })
    test('value of key test in storage should change when invoking setState with new value', () => {
      setState({ a: 2 })
      expect(storage.getItem('test')).toBe(JSON.stringify({ a: 2 }))
      expect(state.value).toEqual({ a: 2 })
    })
    test('key test in storage should be  removed when invoking setState with no parameter or undefined', () => {
      setState()
      expect(storage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
      setState({ a: 1 })
      expect(storage.getItem('test')).toBe(JSON.stringify({ a: 1 }))
      expect(state.value).toEqual({ a: 1 })
      setState(undefined)
      expect(storage.getItem('test')).toBeNull()
      expect(state.value).toBeNull()
    })
  })
}

testStorageWithSimpleVal(localStorage)
testStorageWithSimpleVal(sessionStorage)
testStorageWithObject(localStorage)
testStorageWithObject(sessionStorage)
