import { useInterval } from '../src/useInterval'
import { invokeHook } from './util'

let callback: Function | undefined

beforeEach(() => {
  callback = jest.fn()
  jest.useFakeTimers()
})

afterEach(() => {
  jest.clearAllTimers()
  jest.useRealTimers()
})

test('should init interval with delay = 500', () => {
  invokeHook(() => {
    useInterval(callback!, 500)
  })
  expect(setInterval).toHaveBeenCalledTimes(1)
  expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 500)
  jest.advanceTimersByTime(500)
  expect(callback).toHaveBeenCalled()
})

test('should clearInterval when unmounted', () => {
  const wrapper = invokeHook(() => {
    useInterval(callback!, 500)
  })
  wrapper.unmount()
  expect(clearInterval).toHaveBeenCalledTimes(1)
  expect(clearInterval).toHaveBeenCalledWith(expect.any(Number))
  jest.advanceTimersByTime(500)
  expect(callback).not.toBeCalled()
})

test('interval should be cleared after invoking clear', () => {
  let clear: () => void
  invokeHook(() => {
    [clear] = useInterval(callback!, 500)
  })
  clear!()
  expect(clearInterval).toHaveBeenCalledTimes(1)
  expect(clearInterval).toHaveBeenCalledWith(expect.any(Number))
})

test('interval will be start after invoking start', () => {
  let clear: () => void
  let start: () => void
  invokeHook(() => {
    const res = useInterval(callback!, 500)
    clear = res[0]
    start = res[1]
  })
  clear!()
  expect(clearInterval).toHaveBeenCalledTimes(1)
  expect(clearInterval).toHaveBeenCalledWith(expect.any(Number))
  start!()
  expect(setInterval).toHaveBeenCalled()
  expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 500)
  jest.advanceTimersByTime(500)
  expect(callback).toHaveBeenCalled()
})
