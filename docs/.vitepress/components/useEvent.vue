<template>
  <div>
    <p>target 为 css 选择器</p>
    <button id="target">click</button>
  </div>
  <div>
    <p>target 为 Ref</p>
    <button ref="target">click</button>
  </div>
  <div>
    <p>target 为 DOM 对象</p>
    <button id="test">click</button>
  </div>
</template>
<script>
  import { ref, onMounted } from 'vue'
  import { useEvent } from 'vhook'
  export default {
    setup () {
      const target = ref(null)
      const handler = () => alert('click')
      useEvent('click', handler, true, '#target')
      useEvent('click', handler, true, target)
      onMounted(() => {
        useEvent('click', handler, true, document.getElementById('test'))
      })
      return {
        target
      }
    }
  }
</script>