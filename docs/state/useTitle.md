# ``useTitle``
---

用于设置页面的标签页标题

## API

```typescript
export declare function useTitle(
    title: string, 
    restoreOnUnMount?: boolean
): (title: string) => void;
```

## Params

| 参数             | 说明                     | 类型    | 默认值 |
| ---------------- | ------------------------ | ------- | ------ |
| title            | 标签页标题               | string  |        |
| restoreOnUnMount | 组件卸载时是否恢复原标题 | boolean | false  |

## Methods

该 Hook 返回以下函数：

| 函数签名                 | 描述             |
| ------------------------ | ---------------- |
| （title: string) => void | 用于设置页面标题 |

## Example

<UseTitle/>


## Code
---

```vue
<template>
  <input v-model="title"/>
  <button @click="updateTitle">更新标题</button>
</template>

<script>
  import { useTitle } from 'composition-fn'
  import { ref } from 'vue'
  export default {
    setup () {
      const setTitle = useTitle('title', true)
      const title = ref('title')
      const updateTitle = () => {
        setTitle(title.value)
      }
      return {
        title,
        updateTitle
      }
    }
  }
</script>
```

