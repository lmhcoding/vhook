const globby = require('globby')
const { upperFirst, camelCase } = require('lodash')
const path = require('path')
const fs = require('fs')
const prettier = require('prettier')

function normalizeName (file) {
  return upperFirst(camelCase(file))
}

function importTemplate (file) {
  const comp = normalizeName(file)
  return `const ${comp} = defineAsyncComponent(() => import('./${file}.vue'))`
}

function registerTemplate (file) {
  const comp = normalizeName(file)
  return `app.component('${comp}', ${comp})`
}

function generateRegisterFn (importStatement, registerStatement) {
  return `
    import {defineAsyncComponent} from 'vue'

    ${importStatement}

    export default function registerComponent (app) {
      ${registerStatement}
    }
  `
}

function format (code) {
  const prettierConfigPath = '../.prettierrc'
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.resolve(__dirname, prettierConfigPath),
      (err, data) => {
        if (err) {
          reject(err)
        }
        const defaultConfig = JSON.parse(data.toString())
        const result = prettier.format(code, {
          ...defaultConfig,
          parser: 'babel'
        })
        resolve(result)
      }
    )
  })
}

const viteprssDir = 'docs/.vitepress'
const componentDir = 'components'
const outputPath = 'index.js'

async function registerComponents () {
  const dir = path.join(process.cwd(), viteprssDir, componentDir)
  const files = await globby('**/*.vue', {
    cwd: dir
  })
  const importStatement = files
    .map(file => importTemplate(file.replace(/\.vue/, '')))
    .join('\n')
  const registerStatement = files
    .map(file => registerTemplate(file.replace(/\.vue/, '')))
    .join('\n')
  let code = generateRegisterFn(importStatement, registerStatement)
  code = await format(code)
  fs.writeFileSync(
    path.resolve(dir, outputPath),
    code,
    { encoding: 'utf-8' }
  )
}

module.exports = registerComponents
