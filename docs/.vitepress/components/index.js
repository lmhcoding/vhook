import { defineAsyncComponent } from 'vue'

const UseBoolean = defineAsyncComponent(() => import('./useBoolean.vue'))
const UseEvent = defineAsyncComponent(() => import('./useEvent.vue'))
const UseEventRef = defineAsyncComponent(() => import('./useEventRef.vue'))
const UseLifecycles = defineAsyncComponent(() => import('./useLifecycles.vue'))
const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))
const UseToggle = defineAsyncComponent(() => import('./useToggle.vue'))

export default function registerComponent(app) {
  app.component('UseBoolean', UseBoolean)
  app.component('UseEvent', UseEvent)
  app.component('UseEventRef', UseEventRef)
  app.component('UseLifecycles', UseLifecycles)
  app.component('UseTitle', UseTitle)
  app.component('UseToggle', UseToggle)
}
