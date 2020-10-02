export function patchEventTarget () {
  const div: any = document.createElement('div')
  let proto = Object.getPrototypeOf(div)
  while (proto) {
    // eslint-disable-next-line no-prototype-builtins
    if (proto.hasOwnProperty('addEventListener')) {
      const originAdd = proto.addEventListener
      const originRemove = proto.removeEventListener
      const addEventListener = jest.fn((event, cb, options) => {
        originAdd.call(
          addEventListener.mock.instances[0],
          event,
          cb,
          options
        )
      })
      const removeEventListener = jest.fn((event, cb, options) => {
        originRemove.call(
          removeEventListener.mock.instances[0],
          event,
          cb,
          options
        )
      })
      proto.addEventListener = addEventListener
      proto.removeEventListener = removeEventListener
      return [addEventListener, removeEventListener]
    }
    proto = Object.getPrototypeOf(proto)
  }
  return []
}
