var gulp = require('gulp');
var sass = require('gulp-sass');
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
  gulp.watch('src/*.html',browserSync.reload);
  gulp.watch('src/*/*.html',browserSync.reload);
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);
  gulp.watch('src/assets/css/**/*.css',browserSync.reload);
});

