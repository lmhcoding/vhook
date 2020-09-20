import { useTimeoutFn } from '../src/useTimeoutFn'
import { nextTick } from 'vue'

let callback: Function | undefined

beforeEach(() => {
  callback = jest.fn()
  jest.useFakeTimers()
})

afterEach(() => {
  jest.clearAllTimers()
  jest.clearAllMocks()
})

test('setTimeout should be called with default delay', async () => {
  useTimeoutFn(callback!)
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  jest.advanceTimersByTime(1000)
  await nextTick()
  expect(callback!).toHaveBeenCalledTimes(1)
})

test('setTimeout should not be called when immediate is set to false', () => {
  useTimeoutFn(callback!, 1000, false)
  expect(setTimeout).not.toBeCalled()
})

test('setTimeout should be called after calling start when immediate is false', async () => {
  const { start } = useTimeoutFn(callback!, 1000, false)
  expect(setTimeout).not.toBeCalled()
  start()
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  jest.advanceTimersByTime(1000)
  await nextTick()
  expect(callback!).toHaveBeenCalledTimes(1)
})

test('setTimeout should be clear after calling stop', () => {
  const { stop } = useTimeoutFn(callback!, 1000)
  stop()
  expect(clearTimeout).toHaveBeenCalledTimes(1)
})

test('callback should be called 1 time when clearEffectWhenStop is true and calling start after calling stop', async () => {
  const { start, stop } = useTimeoutFn(callback!, 1000, true, true)
  stop()
  expect(clearTimeout).toHaveBeenCalledTimes(1)
  start()
  jest.advanceTimersByTime(1000)
  await nextTick()
  expect(callback!).toHaveBeenCalledTimes(1)
})
