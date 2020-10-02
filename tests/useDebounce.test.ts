import { useDebounce } from '../src/useDebounce'
import { invokeHook } from './util'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
  jest.clearAllMocks()
})

test('initial debounceValue should be equal to the params value', () => {
  const debounceValue = useDebounce(4)
  expect(debounceValue.value).toBe(4)
})

test('setTimeout should be called with default delay when debounceValue changed', () => {
  const debounceValue = useDebounce(4)
  debounceValue.value = 5
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 200)
})

test('debounceValue should changed when setTimeout callback was invoked', () => {
  const debounceValue = useDebounce(4)
  debounceValue.value = 5
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 200)
  jest.advanceTimersByTime(200)
  expect(debounceValue.value).toBe(5)
})

test('timer will be cleared and recrated when updating debounceValue less than 200s', () => {
  const debounceValue = useDebounce(4)
  debounceValue.value = 5
  debounceValue.value = 6
  expect(debounceValue.value).toBe(4)
  expect(clearTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledTimes(2)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 200)
  jest.advanceTimersByTime(200)
  expect(debounceValue.value).toBe(6)
})

test('timer should be cleared when component is unmounted and timer is not null', () => {
  const wrapper = invokeHook(() => {
    const debounceValue = useDebounce(4)
    debounceValue.value = 5
  })
  wrapper.unmount()
  expect(clearTimeout).toHaveBeenCalledTimes(1)
})
