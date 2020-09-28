import { defineAsyncComponent } from 'vue'

const UseBoolean = defineAsyncComponent(() => import('./useBoolean.vue'))
const UseEvent = defineAsyncComponent(() => import('./useEvent.vue'))
const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))
const UseToggle = defineAsyncComponent(() => import('./useToggle.vue'))

export default function registerComponent(app) {
  app.component('UseBoolean', UseBoolean)
  app.component('UseEvent', UseEvent)
  app.component('UseTitle', UseTitle)
  app.component('UseToggle', UseToggle)
}
