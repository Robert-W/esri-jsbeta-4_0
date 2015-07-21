var gulp = require('gulp');
var config = {
  copy: {
    base: 'src',
    src: ['src/vendor/**/*.js'],
    out: 'build'
  }
};

gulp.task('copy', function () {
  return gulp.src(config.copy.src, { base: config.copy.base })
    .pipe(gulp.dest(config.copy.out));
});
