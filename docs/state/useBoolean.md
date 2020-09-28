# ``useBoolean``
---

用于管理 ``Boolean`` 状态的 ``Hook``



## API

```typescript
const {
  state,
  toggle,
  setTrue,
  setFalse
} = useBoolean(defaultValue?: boolean)
```



## Params

| 参数         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| defaultValue | 初始默认状态 | boolean | false  |



## Methods

该 Hook 返回以下函数：

| 函数名   | 类型                     | 描述              |
| -------- | ------------------------ | ----------------- |
| toggle   | (next?: boolean) => void | 用于反转状态      |
| setTrue  | () => void               | 将状态设置为true  |
| setFalse | () => void               | 将状态设置为false |



## Example

<UseBoolean/>

## Code

```vue
<template>
  <p>{{state}}</p>
  <button @click="toggle()">toggle</button>
  <button @click="setTrue">True</button>
  <button @click="setFalse">False</button>
</template>

<script>
import { useBoolean } from 'v3hook'
export default {
  setup () {
    const res = useBoolean()
  }
  return {
    ...res
  }
}
</script>
```

