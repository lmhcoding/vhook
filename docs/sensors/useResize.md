# ``useResize``

---

追踪 ``window`` 的大小



## API

```typescript
const { width, height } = useResize(cb, delay)
```



## Params

| 参数名 | 描述                         | 类型                                    | 默认值 |
| ------ | ---------------------------- | --------------------------------------- | ------ |
| cb     | resize 时执行的回调          | （width: number, height: number) => any | null   |
| delay  | 防抖延时时间（为0则不作防抖) | number                                  | 200    |



## Result

| 参数名 | 描述                     | 类型                        |
| ------ | ------------------------ | --------------------------- |
| width  | 只读，window.innerWidth  | DeepReadonly<Ref\<number\>> |
| height | 只读，window.innerHeight | DeepReadonly<Ref\<number\>> |



## Example

<UseResize/>



## Code

```vue
<template>
  <p>width: {{width}}</p>
  <p>height: {{height}}</p>
</template>
<script>
  import { useResize } from 'v3hook'
  export default {
    setup () {
      return useResize()
    }
  }
</script>
```

