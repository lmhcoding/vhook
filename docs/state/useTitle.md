# ``useTitle``
---

Composition Function that sets title of the page

## Usage
---

```vue
<script>
    import { useTitle } from 'composition-fn'
    export default {
        setup () {
            // 返回值为 setTitle 函数可用来更新 title
            useTitle('title')
        }
    }
<script>
```

