<template>
  <button ref="target">click</button>
</template>

<script>
  import { useEventRef }  from 'vhook'
  export default {
    setup () {
      const [target] = useEventRef('click', () => {
        alert('click')
      }, true)
      return {
        target
      }
    }
  }
</script>