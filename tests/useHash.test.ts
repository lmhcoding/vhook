import { Ref } from 'vue'
import { useHash } from '../src/useHash'

let hash = '#test'
const mockLocation = {}
Object.defineProperty(mockLocation, 'hash', {
  get () {
    return hash
  },
  set (val) {
    hash = val
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }
})
Object.defineProperty(window, 'location', {
  value: mockLocation
})

describe('test useHash', () => {
  let state: Ref<string>
  let setHash: (hash: string) => void
  beforeEach(() => {
    const res = useHash()
    state = res.hash
    setHash = res.setHash
  })
  test('initial state should be test', () => {
    expect(state.value).toBe('#test')
  })
  test('hash should change after invoking setHash with new hash', () => {
    setHash('new')
    expect(window.location.hash).toBe('new')
  })
  test('state.value should change after changing hash with window.location.hash', () => {
    setHash('new')
    expect(state.value).toBe('new')
  })
})
