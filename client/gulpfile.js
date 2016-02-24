var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var less = require('gulp-less');
var minify_css = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('make', function() {
  gulp.start('js');
  gulp.start('css');
});

gulp.task('watch', function() {
  watch(['src/**/*'], function() {
    gulp.start('js');
  });

  watch(['less/**/*'], function() {
    gulp.start('css');
  });
});

gulp.task('js', function() {
  browserify({entries: './src/app.js', extensions: ['.jsx','.js']})
  .transform(babelify.configure({stage: 0}))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('css', function() {
  return gulp.src('./less/app.less')
    .pipe(less())
    .pipe(plumber())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('min-js', function() {
  gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('min-css', function() {
  return gulp.src('./build/css/app.css')
    .pipe(minify_css({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css/'));
});