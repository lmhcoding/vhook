import { defineAsyncComponent } from 'vue'

const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))

export default function registerComponent(app) {
  app.component('UseTitle', UseTitle)
}
