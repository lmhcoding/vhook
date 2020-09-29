import { defineAsyncComponent } from 'vue'

const UseBoolean = defineAsyncComponent(() => import('./useBoolean.vue'))
const UseDebounce = defineAsyncComponent(() => import('./useDebounce.vue'))
const UseDebounceFn = defineAsyncComponent(() => import('./useDebounceFn.vue'))
const UseEvent = defineAsyncComponent(() => import('./useEvent.vue'))
const UseEventRef = defineAsyncComponent(() => import('./useEventRef.vue'))
const UseInterval = defineAsyncComponent(() => import('./useInterval.vue'))
const UseLifecycles = defineAsyncComponent(() => import('./useLifecycles.vue'))
const UseLocalStorage = defineAsyncComponent(() => import('./useLocalStorage.vue'))
const UseTimeout = defineAsyncComponent(() => import('./useTimeout.vue'))
const UseTimeoutFn = defineAsyncComponent(() => import('./useTimeoutFn.vue'))
const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))
const UseToggle = defineAsyncComponent(() => import('./useToggle.vue'))

export default function registerComponent(app) {
  app.component('UseBoolean', UseBoolean)
  app.component('UseDebounce', UseDebounce)
  app.component('UseDebounceFn', UseDebounceFn)
  app.component('UseEvent', UseEvent)
  app.component('UseEventRef', UseEventRef)
  app.component('UseInterval', UseInterval)
  app.component('UseLifecycles', UseLifecycles)
  app.component('UseLocalStorage', UseLocalStorage)
  app.component('UseTimeout', UseTimeout)
  app.component('UseTimeoutFn', UseTimeoutFn)
  app.component('UseTitle', UseTitle)
  app.component('UseToggle', UseToggle)
}
