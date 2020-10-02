# ``useLocalStorage``

具备响应式功能的 ``localStorage`` 状态



## API

```typescript
const [state, setState] = useLocalStorage(key, val)
```



## Params

| 参数名 | 描述                                                         | 类型   | 默认值 |
| ------ | ------------------------------------------------------------ | ------ | ------ |
| key    | 存进 ``localStorage`` 中的 ``key``                           | string |        |
| val    | 存进 ``localStorage`` 中的 ``val``,会使用 ``JSON.stringify`` 进行序列化 | any    |        |



## Result

| 参数名   | 描述                                                         | 类型                         |
| -------- | ------------------------------------------------------------ | ---------------------------- |
| state    | 存进 ``localStorage`` 中的 ``val``，从 ``localStorage`` 中取出时会进行 ``JSON.parse`` 反序列化, 只读 | DeepReadonly<Ref<T \| null>> |
| setState | 更新 ``localStorage``，同时 ``state`` 也会更新， 不传参数则等同于 ``removeItem`` | (Val?: T) => void            |

## Example

<UseLocalStorage/>

## Code

```vue
<template>
  <p>将数据持久化到 localStorage 中</p>
  <p>刷新页面能拿到存在 localStorage 中的状态</p>
  <input v-model="value"/>
  <button @click="update(value)">update</update>
  <button @click="update()">remove</button>
</template>

<script>
  import { useLocalStorage } from 'vhook'
  export default {
    setup () {
      const [value, update] = useLocalStorage('test', 'test')
      return {
        value,
        update
      }
    }
  }
</script>
```

