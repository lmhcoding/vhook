<template>
  <p>{{count}}</p>
  <button @click="clear">stop</button>
  <button @click="start">restart</button>
</template>

<script>
  import { useInterval } from 'vhook'
  import { ref } from 'vue'
  export default {
    setup () {
      const count = ref(0)
      const [clear, start] = useInterval(() => {
        count.value++
      }, 1000)
      return {
        count,
        clear,
        start
      }
    }
  }
</script>