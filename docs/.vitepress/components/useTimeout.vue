<template>
  <p>Ready: {{ready}}</p>
  <button @click="stop">stop</button>
  <button @click="start">restart</button>
</template>

<script>
  import { useTimeout } from 'v3hook'
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