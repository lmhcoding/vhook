<template>
  <p>{{state}}</p>
  <button @click="toggle()">toggle</button>
  <button @click="setTrue">True</button>
  <button @click="setFalse">False</button>
</template>

<script>
import { useBoolean } from 'vhook'
export default {
  setup () {
    const res = useBoolean()
    return {
      ...res
    }
  }
}
</script>