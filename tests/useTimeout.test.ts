import { useTimeout } from '../src/useTimeout' 

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.clearAllTimers()
  jest.clearAllMocks()
})

test('setTimeout should be called with default delay', () => {
  const { ready } = useTimeout()
  expect(ready.value).toBe(false)
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  jest.advanceTimersByTime(1000)
  expect(ready.value).toBeTruthy()
})

test('setTimeout should not be called when immediate is set to false', () => {
  useTimeout(1000, false)
  expect(setTimeout).not.toBeCalled()
})

test('setTimeout should be called after calling start when immediate is false', () => {
  const { ready, start } = useTimeout(1000, false)
  expect(ready.value).toBeFalsy()
  expect(setTimeout).not.toBeCalled()
  start()
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  jest.advanceTimersByTime(1000)
  expect(ready.value).toBeTruthy()
})
