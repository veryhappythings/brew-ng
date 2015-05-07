var gulp = require('gulp');
var less = require('gulp-less');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');

paths = {
  app: ['./app/*.html', './app/js/*.js'],
  less: './app/less/*.less',
  bower: './bower_components'
};

gulp.task('bower', function() {
    return gulp.src(mainBowerFiles({filter: 'js$'}))
        .pipe(gulp.dest('./app/js/lib/'))
});

gulp.task('bower-watch', ['bower'], browserSync.reload);

gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [paths.less]
    }))
    //.pipe(minifyCSS())
    .pipe(gulp.dest('./app/css'));
});

gulp.task('less-watch', ['less'], browserSync.reload);

gulp.task('serve', ['bower', 'less'], function() {
  browserSync({
    server: {
      baseDir: './app/'
    }
  });
  gulp.watch(paths.less, ['less-watch']);
  gulp.watch(paths.bower, ['bower-watch']);
  gulp.watch(paths.app, browserSync.reload);
});

gulp.task('default', ['serve']);
