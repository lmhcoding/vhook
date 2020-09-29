# ``useSessionStorage``

具备响应式功能的 ``sessionStorage`` 状态



## API

```typescript
const [state, setState] = useSessionStorage(key, val)
```



## Params

| 参数名 | 描述                                                         | 类型   | 默认值 |
| ------ | ------------------------------------------------------------ | ------ | ------ |
| key    | 存进 ``sessionStorage`` 中的 ``key``                         | string |        |
| val    | 存进 ``sessionStorage`` 中的 ``val``,会使用 ``JSON.stringify`` 进行序列化 | any    |        |



## Result

| 参数名   | 描述                                                         | 类型                         |
| -------- | ------------------------------------------------------------ | ---------------------------- |
| state    | 存进 ``sessionStorage`` 中的 ``val``，从 ``sessionStorage`` 中取出时会进行 ``JSON.parse`` 反序列化, 只读 | DeepReadonly<Ref<T \| null>> |
| setState | 更新 ``sessionStorage``，同时 ``state`` 也会更新， 不传参数则等同于 ``removeItem`` | (Val?: T) => void            |

## Example

<UseSessionStorage/>

## Code

```vue
<template>
  <p>将数据持久化到 sessionStorage 中</p>
  <p>sessionStorage中的值： {{state}}</p>
  <p>刷新页面能拿到存在 sessionStorage 中的状态</p>
  <input v-model="value"/>
  <button @click="update(value)">update</button>
  <button @click="update()">remove</button>
</template>

<script>
  import { useSessionStorage } from 'v3hook'
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
```

