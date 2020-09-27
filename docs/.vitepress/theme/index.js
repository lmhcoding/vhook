import theme from 'vitepress/dist/client/theme-default'
import registerComponents from '../components'

theme.enhanceApp = (({ app }) => {
  registerComponents(app)
})

export default theme
