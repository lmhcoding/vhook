# ``useScrollRef``

---

追踪特定 ``DOM`` 节点的滚动位置



:::tip

功能与 ``useScroll`` 相同，区别在于不用传入绑定的目标，内部会生成一个 ``Ref`` ，用于在模板中绑定 ``ref``

:::



## API

```typescript
const [target, x, y, clear] = useScrollRef(delay)
```



## Params

| 参数名 | 描述     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| delay  | 节流时间 | number | 200    |



## Result

| 参数名 | 描述               | 类型                        |
| ------ | ------------------ | --------------------------- |
| x      | element.scrollLeft | DeepReadonly<Ref\<number\>> |
| y      | element.scrollTop  | DeepReadonly<Ref\<number\>> |
| clear  | 解绑监听事件       | () => void                  |
| target | 用于设置 ``ref``   | Ref<Element \| null>        |



## Example

<UseScrollRef/>

## Code

```vue
<template>
  <p>x: {{x}}</p>
  <p>y: {{y}}</p>
  <p>滚动下方粉色块观测x和y变化</p>
  <div 
    ref="target"
    style="border: 1px solid #ccc;width: 200px; height: 200px; overflow: auto;">
    <div 
      style="width: 300px; height: 300px; background: pink;"></div>
  </div>
</template>

<script>
  import { useScrollRef } from 'v3hook'
  export default {
    setup () {
      const [target, x, y ] = useScrollRef()
      return {
        x,
        y,
        target
      }
    }
  }
</script>
```

