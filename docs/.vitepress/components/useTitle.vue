<template>
  <input v-model="title"/>
  <button @click="updateTitle">更新标题</button>
</template>

<script>
  import { useTitle } from 'composition-fn'
  import { ref } from 'vue'
  export default {
    setup () {
      const setTitle = useTitle('title', true)
      const title = ref('title')
      const updateTitle = () => {
        setTitle(title.value)
      }
      return {
        title,
        updateTitle
      }
    }
  }
</script>