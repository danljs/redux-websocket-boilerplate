'use strict'

let gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    less = require('gulp-less'),
    minify_css = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    eslint = require('gulp-eslint')

gulp.task('lint', () =>
    gulp.src(['src/**/*', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

gulp.task('make', () => {
  gulp.start('js')
  gulp.start('css')
})

gulp.task('watch', () => {
  watch(['src/**/*'], () => gulp.start('js'))
  watch(['less/**/*'], () => gulp.start('css'))
  watch(['src/**/*'], () => gulp.start('lint'))
})

gulp.task('js', () => 
  browserify({entries: './src/app.js', extensions: ['.jsx','.js']})
  .transform(babelify.configure({stage: 0}))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js/'))
)

gulp.task('css', () => 
  gulp.src('./less/app.less')
  .pipe(less())
  .pipe(plumber())
  .pipe(gulp.dest('./build/css/'))
)

gulp.task('min-js', () =>
  gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js/'))
)

gulp.task('min-css', () => 
  gulp.src('./build/css/app.css')
  .pipe(minify_css({compatibility: 'ie8'}))
  .pipe(gulp.dest('./build/css/'))
)