var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  karma = require('karma').server;

gulp.task('dist', function() {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat({path: 'ng-honeybadger-logger.min.js'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});
