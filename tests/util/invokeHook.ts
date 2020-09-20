import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

export default function invokeHooks (setup: () => any) {
  const App = defineComponent({
    template: '<div>test</div>',
    setup
  })
  return shallowMount(App)
}
