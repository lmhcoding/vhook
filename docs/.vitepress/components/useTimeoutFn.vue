<template>
  <p>Is callback executed?: {{executed}}</p>
  <button @click="start">restart</button>
  <button @click="stop">stop</button>
</template>
<script>
  import { ref } from 'vue'
  import {useTimeoutFn} from 'v3hook'
  export default {
    setup () {
      const executed = ref(false)
      const { start, stop } = useTimeoutFn(() => {
        executed.value = true
      })
      return {
        executed,
        start: () => {
          executed.value = false
          start()
        },
        stop
      }
    }
  }
</script>