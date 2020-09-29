# ``useStorage``

---

提供具备响应式的 ``localStorage`` 或 ``sessionStorage`` 状态



## API

```typescript
const [state, setState] = useStorage(key, val, storage)
```



## Params
| 参数名  | 描述                                                         | 类型    | 默认值       |
| ------- | ------------------------------------------------------------ | ------- | ------------ |
| key     | 存进 ``localStorage`` 或 ``sessionStorage`` 中的 ``key``     | string  |              |
| val     | 存进 ``localStorage`` 或 ``sessionStorage`` 中的 ``val``,会使用 ``JSON.stringify`` 进行序列化 | any     |              |
| storage | 要使用的存储方式                                             | Storage | localStorage |

## Result

| 参数名   | 描述                                                         | 类型                         |
| -------- | ------------------------------------------------------------ | ---------------------------- |
| state    | 存进 ``localStorage`` 或 ``sessionStorage`` 中的 ``val``，从 ``localStorage`` 中取出时会进行 ``JSON.parse`` 反序列化, 只读 | DeepReadonly<Ref<T \| null>> |
| setState | 更新 ``localStorage`` 或 ``sessionStorage``，同时 ``state`` 也会更新， 不传参数则等同于 ``removeItem`` | (Val?: T) => void            |

## Example

<UseStorage/>

## Code

```vue
<template>
  <div>
    <p>将数据持久化到 localStorage 中</p>
    <p>localStorage中的值： {{localStorageState}}</p>
    <p>刷新页面能拿到存在 localStorage 中的状态</p>
    <input v-model="value"/>
    <button @click="updateLocalStorage(value)">update</button>
    <button @click="updateLocalStorage()">remove</button>
  </div>
  <div>
    <p>将数据持久化到 sessionStorage 中</p>
    <p>sessionStorage中的值： {{sessionStorageState}}</p>
    <p>刷新页面能拿到存在 sessionStorage 中的状态</p>
    <input v-model="val"/>
    <button @click="updateSessionStorage(val)">update</button>
    <button @click="updateSessionStorage()">remove</button>
  </div>
</template>

<script>
  import { useStorage } from 'v3hook'
  import { ref } from 'vue'
  export default {
    setup () {
      const [localStorageState, updateLocalStorage] = useStorage('a', 'localStorage')
      const [sessionStorageState, updateSessionStorage] = useStorage('b', 'sessionStorage', sessionStorage)
      const value = ref(localStorageState.value)
      const val = ref(sessionStorageState.value)
      return {
        localStorageState,
        sessionStorageState,
        value,
        val,
        updateLocalStorage,
        updateSessionStorage
      }
    }
  }
</script>
```

