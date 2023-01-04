const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('../nuxt-blog/assets/css/main.scss').pipe(sass()).pipe(dest('../nuxt-blog/assets/css'))
}

function watchTask() {
  watch(['../nuxt-blog/assets/css/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
