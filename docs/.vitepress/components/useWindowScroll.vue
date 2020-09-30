<template>
  <p>x: {{x}}</p>
  <p>y: {{y}}</p>
</template>

<script>
  import { useWindowScroll } from 'v3hook'
  export default {
    setup () {
      return useWindowScroll()
    }
  }
</script>