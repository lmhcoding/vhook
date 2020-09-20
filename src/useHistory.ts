import { reactive, toRefs, ToRefs, UnwrapRef } from 'vue'
import { useEvent } from './useEvent'
import { def } from './util'

type PathMethod = Extract<keyof History, 'replaceState' | 'pushState'>

function patchHistoryMethod(method: PathMethod): void {
  const history = window.history
  const origin = history[method]

  def(
    history,
    method,
    function (this: History, state: any) {
      const result = origin.apply(this, (arguments as unknown) as Parameters<typeof origin>)
      const event: any = new Event(method.toLowerCase())
      event.state = state
      window.dispatchEvent(event)
      return result
    },
    true
  )
}

patchHistoryMethod('pushState')
patchHistoryMethod('replaceState')

export interface IHistoryState {
  state: any
  hash: string
  search: any
  host: string
  hostname: string
  href: string
  origin: string
  pathname: string
  port: string
  protocol: string
}

function buildState(): IHistoryState {
  const { state } = window.history
  const { hash, search, host, hostname, href, origin, pathname, port, protocol } = window.location
  return {
    state,
    hash,
    search,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol
  }
}

export function useHistory(): ToRefs<IHistoryState> {
  const state: UnwrapRef<IHistoryState> = reactive(buildState())
  useEvent('popstate', buildState)
  useEvent('pushstate' as any, buildState)
  useEvent('replacestate' as any, buildState)
  return toRefs(state)
}
