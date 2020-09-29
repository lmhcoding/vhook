<template>
  <div>
    <p>Boolean 切换</p>
    <p>{{state}}</p>
    <button @click="toggle()">toggle</button>
    <button @click="setDefault">setDefault</button>
    <button @click="setRight">setRight</button>
  </div>
  <div>
    <p>任意两值直接切换</p>
    <p>{{stringState}}</p>
    <button @click="toggleString()">toggle</button>
    <button @click="toggleString('a')">toggle a</button>
    <button @click="toggleString('b')">toggle b</button>
    <button @click="setLeft">setDefault</button>
    <button @click="setAnother">setRight</button>
  </div>
  
</template>

<script>
  import { useToggle } from 'v3hook'
  export default {
    setup () {
      const {
        state,
        toggle,
        setDefault,
        setRight
      } = useToggle()
      const {
        state: stringState,
        toggle: toggleString,
        setDefault: setLeft,
        setRight: setAnother
      } = useToggle('a', 'b')
      return {
        state,
        toggle,
        setDefault,
        setRight,
        stringState,
        toggleString,
        setLeft,
        setAnother
      }
    }
  }
</script>