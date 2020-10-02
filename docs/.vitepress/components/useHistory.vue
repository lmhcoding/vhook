<template>
  <p>hash: {{hash}}</p>
  <p>search: {{search}}</p>
  <p>host: {{host}}</p>
  <p>hostname: {{hostname}}</p>
  <p>origin: {{origin}}</p>
  <p>pathname: {{pathname}}</p>
  <p>port: {{port}}</p>
  <p>protocol: {{protocol}}</p>
</template>

<script>
  import { useHistory } from 'vhook'
  export default {
    setup () {
      return useHistory()
    }
  }
</script>