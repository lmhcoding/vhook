# ``useTimeoutFn``

---



用于在一段时间后执行回调



## API



```typescript
const { start, stop } = useTimeoutFn(fn, delay, immediate, clearEffectWhenStop)
```



## Params

| 参数名              | 描述                                          | 类型     | 默认值 |
| ------------------- | --------------------------------------------- | -------- | ------ |
| fn                  | 回调                                          | Function |        |
| delay               | 定时时间                                      | number   |        |
| immediate           | 是否立即注册定时器                            | boolen   | true   |
| clearEffectWhenStop | 调用 ``stop`` 时是否停止内部的 ``watch`` 监听 | boolean  | false  |



## Result

| 参数名 | 描述            | 类型       |
| ------ | --------------- | ---------- |
| start  | 开启/重启定时器 | () => void |
| Stop   | 停止定时器      | () => void |



## Example



<UseTimeoutFn/>



## Code

```vue
<template>
  <p>Is callback executed?: {{executed}}</p>
  <button @click="start">restart</button>
  <button @click="stop">stop</button>
</template>
<script>
  import { ref } from 'vue'
  import {useTimeoutFn} from 'vhook'
  export default {
    setup () {
      const executed = ref(false)
      const { start, stop } = useTimeoutFn(() => {
        executed.value = true
      })
      return {
        executed,
        start: () => {
          executed.value = false
          start()
        },
        stop
      }
    }
  }
</script>
```

