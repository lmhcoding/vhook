import { defineAsyncComponent } from 'vue'

const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))
const UseToggle = defineAsyncComponent(() => import('./useToggle.vue'))

export default function registerComponent(app) {
  app.component('UseTitle', UseTitle)
  app.component('UseToggle', UseToggle)
}
