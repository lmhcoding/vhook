<template>
  <p>x: {{x}}</p>
  <p>y: {{y}}</p>
</template>

<script>
  import { useWindowScroll } from 'vhook'
  export default {
    setup () {
      return useWindowScroll()
    }
  }
</script>