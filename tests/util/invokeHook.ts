import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

export default function invokeHooks (setup: () => any) {
  document.body.innerHTML = `
    <div id="app"></div>
  `
  const App = defineComponent({
    template: '<div ref="test" data-test="test" id="test">test</div>',
    setup
  })
  // @ts-ignore
  return shallowMount(App, {
    attachTo: document.getElementById('app')
  })
}
