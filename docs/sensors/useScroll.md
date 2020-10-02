# ``useScroll``

---

追踪特定 ``DOM`` 节点的滚动位置



## API

```typescript
const [x, y, clear] = useScroll(target, delay)
```



## Params

| 参数名 | 描述                               | 类型                                      | 默认值 |
| ------ | ---------------------------------- | ----------------------------------------- | ------ |
| target | 监听滚动的 ``DOM``,可使用css选择器 | String \| Element \| Ref<Element \| null> |        |
| delay  | 节流延时时间（为0则不使用节流)     | number                                    | 200    |



## Result

| 参数名 | 描述               | 类型                        |
| ------ | ------------------ | --------------------------- |
| x      | element.scrollLeft | DeepReadonly<Ref\<number\>> |
| y      | element.scrollTop  | DeepReadonly<Ref\<number\>> |
| clear  | 解绑监听事件       | () => void                  |



## Example

<UseScroll/>

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
  import { useScroll } from 'vhook'
  import { ref } from 'vue'
  export default {
    setup () {
      const target = ref(null)
      const [x, y ] = useScroll(target)
      return {
        x,
        y,
        target
      }
    }
  }
</script>
```

