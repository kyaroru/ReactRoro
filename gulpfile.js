var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss'],
  js:['./app/**/*.js'],
  html:['./app/**/*.html']
};

gulp.task('default', ['sass','watch'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });

});

gulp.task('watch',  function (){
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js).on('change', browserSync.reload);
  gulp.watch(paths.html).on('change', browserSync.reload);
});

gulp.task('sass', function(done) {
  gulp.src('./scss/style.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./public/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./public/css/'))
    .on('end', done)
    .pipe(browserSync.stream());
});
