<template>
  <p>width: {{width}}</p>
  <p>height: {{height}}</p>
</template>
<script>
  import { useResize } from 'v3hook'
  export default {
    setup () {
      return useResize()
    }
  }
</script>