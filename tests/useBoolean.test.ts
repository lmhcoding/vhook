import { Ref } from 'vue'
import { useBoolean } from '../src/useBoolean'

describe('test useBoolean', () => {
  let state: Ref<boolean>
  let toggle: (next?: boolean) => void
  let setTrue: () => void
  let setFalse: () => void
  beforeEach(() => {
    const result = useBoolean()
    state = result.state
    toggle = result.toggle
    setTrue = result.setTrue
    setFalse = result.setFalse
  })

  test('init State should be false', () => {
    expect(state.value).toBe(false)
  })

  test('state.value should be toggled after invoking toggle with none params', () => {
    expect(state.value).toBe(false)
    toggle()
    expect(state.value).toBe(true)
    toggle()
    expect(state.value).toBe(false)
  })
  test('state.value should be set to specify value after invoking toggle with one parameter', () => {
    expect(state.value).toBe(false)
    toggle(true)
    expect(state.value).toBe(true)
    toggle(false)
    expect(state.value).toBe(false)
  })
  test('state.value should be true after invoking setTrue', () => {
    setTrue()
    expect(state.value).toBe(true)
  })
  test('state.value should be false after invoking setFalse', () => {
    toggle(true)
    expect(state.value).toBe(true)
    setFalse()
    expect(state.value).toBe(false)
  })
})
