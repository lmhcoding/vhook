# vhook

Collection of Vue Composition Functions

## Install

```bash
npm i vhook
```





- State
  - [``useTitle``](https://lmhcoding.github.io/vhook/state/useTitle.html) ——  用于设置页面的标签页标题
  - [``useToggle``](https://lmhcoding.github.io/vhook/state/useToggle.html) —— 用于在两个状态之间切换
  - [``useBoolean``](https://lmhcoding.github.io/vhook/state/useBoolean.html) ——  用于管理 ``Boolean`` 状态的 ``Hook``
  - [``useHash``](https://lmhcoding.github.io/vhook/state/useHash.html) ——  追踪 ``location.hash`` 的变化
  - [``useHistory``](https://lmhcoding.github.io/vhook/state/useHistory.html) ——  追踪 ``history`` 的变化
- DOM
  - [``useEvent``](https://lmhcoding.github.io/vhook/dom/useEvent.html) / [``useEventRef``](https://lmhcoding.github.io/vhook/dom/useEventRef.html) —— 用于监听事件的 ``Hook``
- Lifecycles
  - [``useLifecycles``](https://lmhcoding.github.io/vhook/lifecycles/useLifecycles.html) —— 同时使用 ``onMounted`` 和 ``onUnmounted`` 的 ``Hook``
- SideEffects
  - [``useDebounce``](https://lmhcoding.github.io/vhook/effects/useDebounce.html) —— 带防抖功能的状态
  - [``useDebounceFn``](https://lmhcoding.github.io/vhook/effects/useDebounceFn.html) ——  生成带防抖功能的函数
  - [``useInterval``](https://lmhcoding.github.io/vhook/effects/useInterval.html) ——  对 ``setInterval`` 的简单封装
  - [``useTimeout``](https://lmhcoding.github.io/vhook/effects/useTimeout.html) —— 用于在一段时间后更新值
  - [``useTimeoutFn``](https://lmhcoding.github.io/vhook/effects/useTimeoutFn.html) —— 用于在一段时间后执行回调
- Storage
  - [``useLocalStorage``](https://lmhcoding.github.io/vhook/storage/useLocalStorage.html) —— 具备响应式功能的 ``localStorage`` 状态
  - [``useSessionStorage``](https://lmhcoding.github.io/vhook/storage/useSessionStorage.html) ——  具备响应式功能的 ``sessionStorage`` 状态
  - [``useStorage``](https://lmhcoding.github.io/vhook/storage/useStorage.html) ——  提供具备响应式的 ``localStorage`` 或 ``sessionStorage`` 状态
- Sensors
  - [``useResize``](https://lmhcoding.github.io/vhook/sensors/useResize.html) —— 追踪 ``window`` 的大小
  - [``useScroll``](https://lmhcoding.github.io/vhook/sensors/useScroll.html) / [``useScrollRef``](https://lmhcoding.github.io/vhook/sensors/useScrollRef.html) ——  追踪特定 ``DOM`` 节点的滚动位置
  - [``useWindowScroll``](https://lmhcoding.github.io/vhook/sensors/useWindowScroll.html) ——  追踪 ``window`` 滚动的位置