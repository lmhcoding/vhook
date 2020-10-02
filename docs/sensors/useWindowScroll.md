# ``useWindowScroll``

---

追踪 ``window`` 滚动的位置



## API

```typescript
const {x, y} = useWindowScroll(delay)
```



## Params

| 参数名 | 描述                  | 类型   | 默认值 |
| ------ | --------------------- | ------ | ------ |
| delay  | 节流时间(为0则不节流) | number | 200    |



## Result

| 参数名 | 描述           | 类型                        |
| ------ | -------------- | --------------------------- |
| x      | window.scrollX | DeepReadonly<Ref\<number\>> |
| y      | window.scrollY | DeepReadonly<Ref\<number\>> |



## Example

<UseWindowScroll/>

## Code

```vue
<template>
  <p>x: {{x}}</p>
  <p>y: {{y}}</p>
</template>

<script>
  import { useWindowScroll } from 'vhook'
  export default {
    setup () {
      return useWindowScroll()
    }
  }
</script>
```

