import { defineAsyncComponent } from 'vue'

const UseBoolean = defineAsyncComponent(() => import('./useBoolean.vue'))
const UseEvent = defineAsyncComponent(() => import('./useEvent.vue'))
const UseEventRef = defineAsyncComponent(() => import('./useEventRef.vue'))
const UseInterval = defineAsyncComponent(() => import('./useInterval.vue'))
const UseLifecycles = defineAsyncComponent(() => import('./useLifecycles.vue'))
const UseTimeout = defineAsyncComponent(() => import('./useTimeout.vue'))
const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))
const UseToggle = defineAsyncComponent(() => import('./useToggle.vue'))

export default function registerComponent(app) {
  app.component('UseBoolean', UseBoolean)
  app.component('UseEvent', UseEvent)
  app.component('UseEventRef', UseEventRef)
  app.component('UseInterval', UseInterval)
  app.component('UseLifecycles', UseLifecycles)
  app.component('UseTimeout', UseTimeout)
  app.component('UseTitle', UseTitle)
  app.component('UseToggle', UseToggle)
}
