<template>
  <button @click="setHash('api')">set hash to api</button>
</template>

<script>
  import { useHash } from 'v3hook'
  export default {
    setup () {
      return useHash()
    }
  }
</script>