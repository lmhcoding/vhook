<template>
  <p>Ready: {{ready}}</p>
  <button @click="stop">stop</button>
  <button @click="start">restart</button>
</template>

<script>
  import { useTimeout } from 'vhook'
  export default {
    setup () {
      const {
        ready,
        start,
        stop
      } = useTimeout(3000)
      return {
        ready,
        start,
        stop
      }
    }
  }
</script>