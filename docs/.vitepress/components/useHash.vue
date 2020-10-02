<template>
  <button @click="setHash('api')">set hash to api</button>
</template>

<script>
  import { useHash } from 'vhook'
  export default {
    setup () {
      return useHash()
    }
  }
</script>