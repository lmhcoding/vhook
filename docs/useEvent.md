# ``useEvent``
---

Sensor hook that subscribes a ``handler`` to events

## Usage

1. 当不传target时，target 默认为 ``window``

```vue
  import { useEvent } from 'composition-fn'
  export default {
    setup () {
      useEvent('resize', () => {
        console.log('window resize')
      })
    }
  }
```

2. target 可为 CSS 选择器

```vue
<template>
  <div id="test">test</test>
</template>

<script>
  import { useEvent } from 'composition-fn'
  export default {
    setup () {
      useEvent('click', () => {
        console.log('window resize')
      }, true, '#test')
    }
  }
</script>
```

3. target 为 Ref<EventTarget>

```vue
<template>
  <div ref="target">test</test>
</template>

<script>
  import { ref }  from 'vue'
  import { useEvent } from 'composition-fn'
  export default {
    setup () {
      const target = ref(null)
      useEvent('click', () => {
        console.log('window resize')
      }, true, '#test')
      return {
        target
      }
    }
  }
</script>
```

4. target 为 EventTarget

```vue
<template>
  <div id="target">test</test>
</template>

<script>
  import { ref, onMounted }  from 'vue'
  import { useEvent } from 'composition-fn'
  export default {
    setup () {
      const target = ref(null)
      onMounted(() => {
        useEvent('click', () => {
          console.log('window resize')
        }, true, document.querySelector('#target))
      })
      return {
        target
      }
    }
  }
</script>
```

