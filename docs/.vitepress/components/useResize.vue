<template>
  <p>width: {{width}}</p>
  <p>height: {{height}}</p>
</template>
<script>
  import { useResize } from 'vhook'
  export default {
    setup () {
      return useResize()
    }
  }
</script>