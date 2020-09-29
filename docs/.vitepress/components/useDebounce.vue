<template>
  <p>输入停止3s后才会更新状态： {{state}}</p>
  <input v-model="state"/>
</template>

<script>
import { useDebounce } from 'v3hook'
export default {
  setup () {
    const state = useDebounce('test', 3000)
    return {
      state
    }
  }
}
</script>