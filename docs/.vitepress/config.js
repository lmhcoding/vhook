const config = {
  title: 'v3hook',
  lang: 'ZH-CN',
  description: 'Collection of Vue Composition Functions',
  header: [],
  themeConfig: {
    repo: 'lmhcoding/composition-fn',
    docsRepo: 'lmhcoding/composition-fn',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        nav: [
          {
            text: 'Changelog', 
            link: 'https://github.com/lmhcoding/composition-fn/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: [
          {text: 'Introduction', link: '/'},
          {
            text: 'State', 
            collapsable: false,
            children: [
              {text: 'useTitle', link: '/state/useTitle'},
              {text: 'useToggle', link: '/state/useToggle'},
              {text: 'useBoolean', link: '/state/useBoolean'},
              {text: 'useHash', link: '/state/useHash'},
              {text: 'useHistory', link: '/state/useHistory'}
            ]
          },
          {
            text: 'Dom',
            collapsable: false,
            children: [
              {text: 'useEvent', link: '/dom/useEvent'},
              {text: 'useEventRef', link: '/dom/useEventRef'},
            ]
          },
          {
            text: 'Lifecycles',
            collapsable: false,
            children: [
              {text: 'useLifecycles', link: '/lifecycles/useLifecycles'}
            ]
          },
          {
            text: 'SideEffects',
            collapsable: false,
            children: [
              {text: 'useDebounce', link: '/effects/useDebounce'},
              {text: 'useDebounceFn', link: '/effects/useDebounceFn'},
              {text: 'useInterval', link: '/effects/useInterval'},
              {text: 'useTimeout', link: '/effects/useTimeout'},
              {text: 'useTimeoutFn', link: '/effects/useTimeoutFn'},
            ]
          },
          {
            text: 'Storage',
            collapsable: false,
            children: [
              {text: 'useLocalStorage', link: '/storage/useLocalStorage'},
              {text: 'useSessionStorage', link: '/storage/useSessionStorage'},
              {text: 'useStorage', link: '/storage/useStorage'}
            ]
          },
          {
            text: 'Sensors',
            collapsable: false,
            children: [
              {text: 'useWindowScroll', link: '/sensors/useWindowScroll'},
              {text: 'useResize', link: '/sensors/useResize'},
              {text: 'useScroll', link: '/sensors/useScroll'},
              {text: 'useScrollRef', link: '/sensors/useScrollRef'}
            ]
          }
        ]
      }
    }
  },
  locales: {
    '/': {
      lang: 'ZH-CN',
      title: 'vHook',
      description: 'Collection of Vue Composition Functions'
    }
  }
}

module.exports = config