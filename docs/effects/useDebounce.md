# ``useDebounce``



带防抖功能的状态



## API

```typescript
const state = useDebounce(value, delay)
```



## Params

| 参数名 | 描述         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| value  | 默认状态值   | any    |        |
| delay  | 防抖延时时间 | number | 200    |



## Result



| 参数名 | 描述                 | 类型   |
| ------ | -------------------- | ------ |
| state  | 带防抖功能的 ``Ref`` | Ref<T> |



## Example



<UseDebounce/>

## Code

```vue
<template>
  <input v-model="state"/>
</template>

<script>
import { useDebounce } from 'v3hook'
export default {
  setup () {
    const state = useDebounce('test')
    return {
      state
    }
  }
}
</script>
```

