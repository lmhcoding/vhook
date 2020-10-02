# ``useEvent``
---

用于监听事件的 ``Hook``

:::tip
会在组件卸载时自动解绑事件，当 ``target`` 为 ``Ref`` 时，``target`` 变化时也会自动解绑事件
:::



## API

```typescript
const [target, clear] = useEvent(event, cb, options, target = window)
```



## Params

| 参数名  | 描述                                                         | 类型                                              | 默认值 |
| ------- | ------------------------------------------------------------ | ------------------------------------------------- | ------ |
| event   | 事件名                                                       | string                                            |        |
| cb      | 事件监听回调                                                 | Function                                          |        |
| options | 传递给 ``addEventListener`` 和 ``removeEventListener`` 的第三个参数 | bolean \| AddEventListenerOptions                 |        |
| target  | 绑定事件的目标                                               | EventTarget \| Ref<EventTarget \| null> \| string | Window |

## Result

| 参数   | 说明               | 类型                                                         |
| ------ | ------------------ | ------------------------------------------------------------ |
| target | 事件绑定的目标对象 | interface IEventTarget {readonly value: EventTarget \| null} |
| clear  | 用于解绑事件       | () => void                                                   |



## Example

<UseEvent/>

## Code

```vue
<template>
  <div>
    <p>target 为 css 选择器</p>
    <button id="target">click</button>
  </div>
  <div>
    <p>target 为 Ref</p>
    <button ref="target">click</button>
  </div>
  <div>
    <p>target 为 DOM 对象</p>
    <button id="test">click</button>
  </div>
</template>
<script>
  import { ref, onMounted } from 'vue'
  import { useEvent } from 'vhook'
  export default {
    setup () {
      const target = ref(null)
      const handler = () => alert('click')
      useEvent('click', handler, true, '#target')
      useEvent('click', handler, true, target)
      onMounted(() => {
        useEvent('click', handler, true, document.getElementById('test'))
      })
      return {
        target
      }
    }
  }
</script>
```

