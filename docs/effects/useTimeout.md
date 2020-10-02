# useTimeout

---

用于在一段时间后更新值



## API

```typescript
const {ready, start, stop} = useTimeout(delay, immediate)
```



## Params



| 参数名    | 描述               | 类型    | 默认值 |
| --------- | ------------------ | ------- | ------ |
| delay     | 延时时间           | number  |        |
| immediate | 是否立即启动定时器 | boolean | true   |



## Result



| 参数名 | 描述            | 类型       |
| ------ | --------------- | ---------- |
| ready  | 定时是否结束    | boolean    |
| start  | 开启/重启定时器 | () => void |
| stop   | 停止定时器      | () => void |



## Example



<UseTimeout/>



## Code



```vue
<template>
  <p>Ready: {{ready}}</p>
  <button @click="stop">stop</button>
  <button @click="start">restart</button>
</template>

<script>
  import { useTimeout } from 'vhook'
  export default {
    setup () {
      const {
        ready,
        start,
        stop
      } = useTimeout(3000)
      return {
        ready,
        start,
        stop
      }
    }
  }
</script>
```

