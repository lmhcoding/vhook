import { useDebounceFn } from '../src/useDebounceFn'

let callback: (...rest: any[]) => any
const identity = (v: string) => v

beforeEach(() => {
  jest.useFakeTimers()
  callback = jest.fn((s: string) => {
    identity(s)
  })
})

afterEach(() => {
  jest.useRealTimers()
  jest.clearAllMocks()
})

test('callback should not be called after invoking useDebounceFn', () => {
  useDebounceFn(callback!)
  expect(callback!).not.toBeCalled()
})

test('setTimeout should be called after invoking the function returned by useDebounceFn', () => {
  const debounceFn = useDebounceFn(callback!)
  debounceFn()
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 200)
})

test('timer should be cleared when calling the function returned by useDebounceFn in 200s', () => {
  const debounceFn = useDebounceFn(callback!)
  debounceFn()
  debounceFn()
  expect(clearTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledTimes(2)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 200)
})

test('callback should be called when timeout', async () => {
  const debounceFn = useDebounceFn(callback!)
  debounceFn('1')
  debounceFn('2')
  jest.advanceTimersByTime(200)
  expect(callback!).toHaveBeenCalledTimes(1)
  expect(callback!).toHaveBeenCalledWith('2')
})
