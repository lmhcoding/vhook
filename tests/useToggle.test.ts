import { Ref } from 'vue'
import { useToggle } from '../src/useToggle'

describe('test useToggle with none params', () => {
  let state: Ref<boolean>
  let toggle: (next?: boolean) => void
  let setDefault: () => void
  let setRight: () => void
  beforeEach(() => {
    const result = useToggle()
    state = result.state
    toggle = result.toggle
    setDefault = result.setDefault
    setRight = result.setRight
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
  test('state.value should be false after invoking setDefault', () => {
    toggle(true)
    expect(state.value).toBe(true)
    setDefault()
    expect(state.value).toBe(false)
  })
  test('state.value should be true after invoking setRight', () => {
    setRight()
    expect(state.value).toBe(true)
  })
})

describe('test useToggle with one parameter', () => {
  let state: Ref<boolean>
  let toggle: (next?: boolean) => void
  let setDefault: () => void
  let setRight: () => void
  beforeEach(() => {
    const result = useToggle(true)
    state = result.state
    toggle = result.toggle
    setDefault = result.setDefault
    setRight = result.setRight
  })

  test('init State should be true', () => {
    expect(state.value).toBe(true)
  })

  test('state.value should be toggled after invoking toggle with none params', () => {
    expect(state.value).toBe(true)
    toggle()
    expect(state.value).toBe(false)
    toggle()
    expect(state.value).toBe(true)
  })
  test('state.value should be set to specify value after invoking toggle with one parameter', () => {
    expect(state.value).toBe(true)
    toggle(false)
    expect(state.value).toBe(false)
    toggle(true)
    expect(state.value).toBe(true)
  })
  test('state.value should be true after invoking setDefault', () => {
    toggle(false)
    expect(state.value).toBe(false)
    setDefault()
    expect(state.value).toBe(true)
  })
  test('state.value should be false after invoking setRight', () => {
    setRight()
    expect(state.value).toBe(false)
  })
})

describe('test useToggle with two parameters', () => {
  let state: Ref<'abc' | 'cde'>
  let toggle: (next?: 'abc' | 'cde') => void
  let setDefault: () => void
  let setRight: () => void
  beforeEach(() => {
    const result = useToggle('abc', 'cde')
    state = result.state
    toggle = result.toggle
    setDefault = result.setDefault
    setRight = result.setRight
  })

  test('init State should be abc', () => {
    expect(state.value).toBe('abc')
  })

  test('state.value should be toggled after invoking toggle with none params', () => {
    expect(state.value).toBe('abc')
    toggle()
    expect(state.value).toBe('cde')
    toggle()
    expect(state.value).toBe('abc')
  })
  test('state.value should be set to specify value after invoking toggle with one parameter', () => {
    expect(state.value).toBe('abc')
    toggle('cde')
    expect(state.value).toBe('cde')
    toggle('abc')
    expect(state.value).toBe('abc')
  })
  test('state.value should be abc after invoking setDefault', () => {
    toggle('cde')
    expect(state.value).toBe('cde')
    setDefault()
    expect(state.value).toBe('abc')
  })
  test('state.value should be cde after invoking setRight', () => {
    setRight()
    expect(state.value).toBe('cde')
  })
})
