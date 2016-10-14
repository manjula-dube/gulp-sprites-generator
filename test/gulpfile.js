// Load in dependencies
var gulp = require('gulp');
var merge = require('merge-stream');
var through2 = require('through2');
var spritesmith = require('../');

gulp.task('sprite', function () {
  return gulp.src('test-files/*.jpeg').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm:'left-right',
    padding:20
  }))
  .pipe(gulp.dest('sprites/destination/'));
});

gulp.task('default', [
  'sprite'
]);
