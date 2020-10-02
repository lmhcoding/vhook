import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const defaultTemplate = '<div ref="test" data-test="test" id="test">test</div>'

export function invokeHook (setup: () => any, template = defaultTemplate) {
  document.body.innerHTML = `
    <div id="app"></div>
  `
  const App = defineComponent({
    template,
    setup
  })
  // @ts-ignore
  return shallowMount(App, {
    attachTo: document.getElementById('app')
  })
}
