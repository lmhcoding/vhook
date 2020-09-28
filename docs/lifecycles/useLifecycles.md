# useLifecycles
---

同时使用 ``onMounted`` 和 ``onUnmounted`` 的 ``Hook``

## API

```typescript
useLifecycles(onMountedCb, onUnmountedCb)
```

## Params

| 参数名        | 描述                     | 类型      | 默认值 |
| ------------- | ------------------------ | --------- | ------ |
| onMountedCb   | ``onMounted`` 时的回调   | () => any |        |
| onUnmountedCb | ``onUnmounted`` 时的回调 | () => any |        |



## Example



<UseLifecycles/>



## Code

```vue
<script>
  import { useLifecycles } from 'v3hook'
  export default {
    setup () {
      useLifecycles(
        () => console.log('mounted'),
        () => console.log('unmounted')
      )
    }
  }
</script>
```

