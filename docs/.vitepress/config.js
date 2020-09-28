const config = {
  title: 'vHook',
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