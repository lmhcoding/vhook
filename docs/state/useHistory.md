# ``useHistory``

---



追踪 ``history`` 的变化



:::tip

代理拦截 ``pushState`` 以及 ``replaceState``，实现调用 ``popState`` 、 ``replaceState`` 以及 ``pushState`` 时，可以追踪到 ``history`` 的状态变化

:::



## API



```typescript
const {
  state,
  hash,
  search,
  host,
  hostname,
  href,
  origin,
  pathname,
  port,
  protocol,
  clear
} = useHistory()
```



## Result

| 参数名   | 描述                                                         | 类型                        |
| -------- | ------------------------------------------------------------ | --------------------------- |
| state    | history.state                                                | Any                         |
| hash     | location.hash                                                | DeepReadonly<Ref\<string\>> |
| search   | location.search                                              | DeepReadonly<Ref\<string\>> |
| host     | location.host                                                | DeepReadonly<Ref\<string\>> |
| hostname | location.hostname                                            | DeepReadonly<Ref\<string\>> |
| origin   | location.origin                                              | DeepReadonly<Ref\<string\>> |
| pathname | location.pathname                                            | DeepReadonly<Ref\<string\>> |
| port     | Location.port                                                | DeepReadonly<Ref\<number\>> |
| protocol | location.protocol                                            | DeepReadonly<Ref\<number\>> |
| clear    | 清除对 ``popstate``、``pushstate``和``replacestate``的监听，不再响应变化 | () => void                  |



## Example

<UseHistory/>



## Code

```vue
<template>
  <p>hash: {{hash}}</p>
  <p>search: {{search}}</p>
  <p>host: {{host}}</p>
  <p>hostname: {{hostname}}</p>
  <p>origin: {{origin}}</p>
  <p>pathname: {{pathname}}</p>
  <p>port: {{port}}</p>
  <p>protocol: {{protocol}}</p>
</template>

<script>
  import { useHistory } from 'v3hook'
  export default {
    setup () {
      return useHistory()
    }
  }
</script>
```

