var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
  return gulp.src('src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
});

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  gulp.watch(['src/assets/js/modules/**/*.js'], ['waitForScripts']);
  gulp.watch('src/*.html',browserSync.reload);
  gulp.watch('src/*/*.html',browserSync.reload);
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);
  gulp.watch('src/assets/css/**/*.css',browserSync.reload);
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('waitForScripts', ['scripts'], function() {
  browserSync.reload();
});
