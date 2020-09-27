# useToggle

---



用于在两个状态之间切换



## API



```typescript
const { 
  state, 
  toggle, 
  setDefault, 
  setRight 
} = useToggle(defaultValue?: boolean)
const { 
   state, 
   toggle, 
   setDefault, 
   setRight 
} = useToggle(defaultValue: any, reverseValue?:any)
```



## Params

| 参数         | 说明                     | 类型                                             | 默认值 |
| ------------ | ------------------------ | ------------------------------------------------ | ------ |
| defaultValue | 可选，传入的默认状态值   | string \| number \| boolean \| undefined \| null | false  |
| reverseValue | 可选，传入的取反的状态值 | string \| number \| boolean \| undefined \| null |        |



## Methods

该 Hook 返回以下函数：

| 函数名     | 类型                  | 描述                                                         |
| ---------- | --------------------- | ------------------------------------------------------------ |
| Toggle     | （next?: any) => void | 触发状态更改的函数，接受传入 ``useToggle`` 的两个参数值修改状态 |
| setDefault | () => void            | 重置回默认值                                                 |
| setRight   | () => void            | 设置为reverseValue                                           |



## Example



<UseToggle/>



## Code

```vue
<template>
  <div>
    <p>Boolean 切换</p>
    <p>{{state}}</p>
    <button @click="toggle()">toggle</button>
    <button @click="setDefault">setDefault</button>
    <button @click="setRight">setRight</button>
  </div>
  <div>
    <p>任意两值直接切换</p>
    <p>{{stringState}}</p>
    <button @click="toggleString()">toggle</button>
    <button @click="toggleString('a')">toggle a</button>
    <button @click="toggleString('b')">toggle b</button>
    <button @click="setLeft">setDefault</button>
    <button @click="setAnother">setRight</button>
  </div>
  
</template>

<script>
  import { useToggle } from 'composition-fn'
  export default {
    setup () {
      const {
        state,
        toggle,
        setDefault,
        setRight
      } = useToggle()
      const {
        state: stringState,
        toggle: toggleString,
        setDefault: setLeft,
        setRight: setAnother
      } = useToggle('a', 'b')
      return {
        state,
        toggle,
        setDefault,
        setRight,
        stringState,
        toggleString,
        setLeft,
        setAnother
      }
    }
  }
</script>
```

