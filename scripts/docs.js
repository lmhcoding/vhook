const gh = require('gh-pages')
const shell = require('shelljs')
const chalk = require('chalk')
const ora = require('ora')
const path = require('path')
const fs = require('fs')

const fail = msg => console.log(chalk.red(msg))

function exec(command) {
  return new Promise((resolve) => {
    shell.exec(command, { silent: true }, (code, stdout, stderr) => {
      if (code !== 0) {
        fail(stderr)
        process.exit(1)
      } else {
        resolve()
      }
    })
  })
}

function copyDist () {
  const esmSrc = path.resolve(__dirname, '../esm')
  const target = path.resolve(__dirname, '../node_modules/vhook')
  const libSrc = path.resolve(__dirname, '../lib')
  shell.mkdir('-p', target)
  shell.cp('-R', esmSrc, target)
  shell.cp('-R', libSrc, target)
  shell.cp(
    path.resolve(__dirname, '../package.json'),
    target
  )
}

async function deploy () {
  const spinner = ora('start build vhook').start()
  try {
    await exec('yarn build')
    spinner.succeed('vhook built success')
    copyDist()
    spinner.start('start building docs')
    await exec('yarn docs:build')
    spinner.succeed('docs built success')
    await exec('touch docs/.vitepress/dist/.nojekyll')
  } catch (e) {
    fail(e1)
    process.exit(1)
  }
}

deploy()
