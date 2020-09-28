# useInterval

---



对 ``setInterval`` 的简单封装



:::tip

在组件 ``mounted`` 时设置定时器，并在组件 ``unmounted`` 时清除定时器

:::



## API



```typescript
const [clear, start] = useInterval(fn, delay, immediate)
```



## Params

| 参数名    | 描述                         | 类型     | 默认值 |
| --------- | ---------------------------- | -------- | ------ |
| fn        | 定时器回调                   | Function |        |
| delay     | 延时时间                     | number   |        |
| immediate | 是否立即执行回调在开启定时器 | boolean  | false  |



## Result



| 参数名 | 描述           | 类型       |
| ------ | -------------- | ---------- |
| clear  | 用于清除定时器 | () => void |
| start  | 用于启动定时器 | () => void |
|        |                |            |

## Example



<UseInterval/>



## Code

```vue
<template>
  <p>{{count}}</p>
  <button @click="clear">stop</button>
  <button @click="start">restart</button>
</template>

<script>
  import { useInterval } from 'v3hook'
  import { ref } from 'vue'
  export default {
    setup () {
      const count = ref(0)
      const [clear, start] = useInterval(() => {
        count.value++
      }, 1000)
      return {
        count,
        clear,
        start
      }
    }
  }
</script>
```

