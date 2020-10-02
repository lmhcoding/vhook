<template>
  <p>疯狂点击按钮，最后停下3s才会执行回调</p>
  <button @click="onClick">click</button>
</template>

<script>
  import { useDebounceFn } from 'vhook'
  export default {
    setup () {
      const onClick = useDebounceFn(() => {
        alert('click')
      }, 3000)
      return {
        onClick
      }
    }
  }
</script>