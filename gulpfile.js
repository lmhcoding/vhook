const registerComponents = require('./scripts/registerComponent')
const gulp = require('gulp')

exports.default = function () {
  gulp.watch(
    'docs/.vitepress/components/**/*.vue',
    registerComponents
  )
}
