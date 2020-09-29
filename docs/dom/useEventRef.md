# useEventRef
---

用于绑定事件的 ``Hook``

:::tip
与 ``useEvent`` 功能相同，区别在于只接受三个参数： ``event``、``cb`` 和 ``options``，函数内部会返回一个 ``Ref``，用于在模板里设置事件绑定的对象
:::

## API

```typescript
const [target, clear] = useEventRef(event, cb, options)
```

## Params



| 参数名  | 描述                                                         | 类型                              | 默认值 |
| ------- | ------------------------------------------------------------ | --------------------------------- | ------ |
| event   | 事件名称                                                     | string                            |        |
| cb      | 事件回调                                                     | Function                          |        |
| options | 传递给 ``addEventListener`` 和 ``removeEventListener`` 的第三个参数 | Bolean \| AddEventListenerOptions |        |



## Result



| 参数   | 说明                                    | 类型                 |
| ------ | --------------------------------------- | -------------------- |
| target | 用于在模板中设置事件绑定的 ``DOM`` 节点 | Ref<Element \| null> |
| clear  | 用于解绑事件                            | () => void           |

## Example

<UseEventRef/>



## Code

```vue
<template>
  <button ref="target">click</button>
</template>

<script>
  import { useEventRef }  from 'v3hook'
  export default {
    setup () {
      const [target] = useEventRef('click', () => {
        alert('click')
      }, true)
      return {
        target
      }
    }
  }
</script>
```

