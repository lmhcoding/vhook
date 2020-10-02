<template>
  <p>将数据持久化到 sessionStorage 中</p>
  <p>sessionStorage中的值： {{state}}</p>
  <p>刷新页面能拿到存在 sessionStorage 中的状态</p>
  <input v-model="value"/>
  <button @click="update(value)">update</button>
  <button @click="update()">remove</button>
</template>

<script>
  import { useSessionStorage } from 'vhook'
  import { ref } from 'vue'
  export default {
    setup () {
      const [state, update] = useSessionStorage('test', 'test')
      const value = ref(state.value)
      return {
        state,
        value,
        update
      }
    }
  }
</script>