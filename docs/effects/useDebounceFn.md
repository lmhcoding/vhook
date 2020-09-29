# ``useDebounceFn``

生成带防抖功能的函数



## API

```typescript
const debounceFn = useDebounceFn(fn, delay)
```



## Params

| 参数名 | 描述                   | 类型                  | 默认值 |
| ------ | ---------------------- | --------------------- | ------ |
| fn     | 需要添加防抖功能的函数 | (…rest: any[]) => any |        |
| delay  | 延时时间               | number                | 200    |



## Example

<UseDebounceFn/>

## Code



```vue
<template>
  <p>疯狂点击按钮，最后停下3s才会执行回调</p>
  <button @click="onClick">click</button>
</template>

<script>
  import { useDebounceFn } from 'v3hook'
  export default {
    setup () {
      const onClick = useDebounceFn(() => {
        alert('click')
      }, 3000)
      return {
        onClick
      }
    }
  }
</script>
```

