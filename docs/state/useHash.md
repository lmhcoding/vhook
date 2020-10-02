# ``useHash``

---



追踪 ``location.hash`` 的变化



## API

```typescript
const { hash, setHash } = useHash()
```



## Result

| 参数名  | 描述                                          | 类型                        |
| ------- | --------------------------------------------- | --------------------------- |
| hash    | 一个只读状态，对应当前 ``location.hash`` 的值 | DeepReadonly<Ref\<string\>> |
| setHash | 用于设置新的 ``hash`` 值                      | （hash: string) => void     |



## Example

<UseHash/>

## Code

```vue
<template>
  <button @click="setHash('api')">set hash to params</button>
</template>

<script>
  import { useHash } from 'vhook'
  export default {
    setup () {
      return useHash()
    }
  }
</script>
```

